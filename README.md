# Foresy app

### Fig Bugs
* `File android/java_pid56129.hprof is 656.38 MB; this exceeds GitHub's file size limit of 100.00 MB`
```bash
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch android/java_pid56129.hprof' 
```