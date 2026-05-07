import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Loader2, Database, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { migrateHostelsDevToLive } from '@/utils/bookingMigration.js';

export default function HostelMigrationPanel() {
  const [isMigrating, setIsMigrating] = useState(false);
  const [results, setResults] = useState(null);

  const handleStartMigration = async () => {
    setIsMigrating(true);
    setResults(null);
    toast.info('Migration started. Please do not close this window.');

    try {
      const migrationResults = await migrateHostelsDevToLive();

      setResults(migrationResults);

      if (migrationResults.success && migrationResults.errors.length === 0) {
        toast.success(`${migrationResults.copied} hostels migrated successfully!`);
      } else if (migrationResults.success && migrationResults.errors.length > 0) {
        toast.warning(`Migration completed with ${migrationResults.errors.length} errors.`);
      } else {
        toast.error('Migration failed. Check the results for details.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred during migration.');
      setResults({
        success: false,
        copied: 0,
        skipped: 0,
        errors: [error.message || 'Unknown error']
      });
    } finally {
      setIsMigrating(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Database className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle>Hostel Migration (Dev → Live)</CardTitle>
            <CardDescription className="mt-1">
              Synchronize hostel records from your local development database to the live production database.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-4 rounded-xl border flex items-start space-x-3 text-sm text-muted-foreground">
          <Info className="w-5 h-5 text-blue-500 shrink-0" />
          <p>
            This operation will fetch all hostels from the development environment and copy them to the live environment.
            Existing hostels (matched by name and location) will be skipped to prevent duplicates.
          </p>
        </div>

        {results && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-semibold text-foreground flex items-center space-x-2">
              <span>Migration Results</span>
              {results.success && results.errors.length === 0 ? (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              ) : (
                <AlertCircle className="w-4 h-4 text-amber-500" />
              )}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-xl bg-card flex flex-col items-center justify-center text-center space-y-1">
                <span className="text-3xl font-bold text-green-600">{results.copied}</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Copied</span>
              </div>
              <div className="p-4 border rounded-xl bg-card flex flex-col items-center justify-center text-center space-y-1">
                <span className="text-3xl font-bold text-slate-500">{results.skipped}</span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Skipped</span>
              </div>
            </div>

            {results.errors.length > 0 && (
              <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-xl space-y-2">
                <h4 className="text-sm font-semibold text-destructive flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Errors Encountered ({results.errors.length})</span>
                </h4>
                <ul className="text-xs space-y-1 text-destructive/80 max-h-32 overflow-y-auto pl-6 list-disc">
                  {results.errors.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="bg-muted/30 border-t px-6 py-4">
        <Button
          onClick={handleStartMigration}
          disabled={isMigrating}
          className="w-full sm:w-auto ml-auto transition-all duration-200"
        >
          {isMigrating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Migrating Data...
            </>
          ) : (
            'Start Migration'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}