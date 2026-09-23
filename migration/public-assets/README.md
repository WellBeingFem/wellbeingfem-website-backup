# Public asset export

`manus-storage/` contains the public files currently referenced by production source code. File names retain their current managed-storage keys so the migration can map each existing `/manus-storage/<filename>` reference precisely.

`original-uploaded-assets/` preserves public original uploads for archive and reconstruction purposes. Not every original is an active runtime dependency; use the source references and `migration/site-configuration/seo-metadata.md` to identify the assets required by a particular page.

The Living in Frequency PDF is present in `manus-storage/` under its current managed-storage filename.
