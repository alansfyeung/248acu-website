## Jekyll Framework 

This website is powered by Jekyll. 

- Installation: https://jekyllrb.com/docs/installation/ 
- After installing, try `npm run serve` in this directory and debug as required. 

The repo owner has been developing on Ruby 3.x on Windows (late 2024).


## Shortcut commands

For your convenience some npm scripts are included. 

### Local development server on localhost:4000 

```npm run serve```

### Build and store outputs in `_site`

```npm run build```

### Upload to armycadets.sydney Amazon S3 bucket (hosts https://armycadets.sydney)
Note you will need AWS SDK, and credentials/permissions for this. 

```npm run up [-- --profile <yourawsprofilenamehere>]```

### Build + upload in a single step

```npm run publish```

### Rebuild JS if you have changed any scripts in main.js
These need to be committed to source control

```npm run uglify```