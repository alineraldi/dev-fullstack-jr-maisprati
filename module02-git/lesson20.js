// u s e f u l  g i t  c o m m a n d s
// • git branch -m branchname :::: renames the branch
// • git branch aline ::: creates a branch called aline
// • git restore ::: restores local changes
// • git clean -n ::: to see what files and directories would be removed without actually deleting them
// • git clean -f ::: to actually remove the untracked files and directories, use the -f or --force option
// • git revert head ::: reverses the last commit!

// • git reset 
// ○ git reset --soft <commit> ::: moves the HEAD to the specified commit, but keeps changes in the staging area.
// ○ git reset --mixed <commit> ::: moves the HEAD and updates the staging area, but leaves your working directory intact.
// ○ git reset --hard <commit> moves the HEAD, updates the staging area, and discards changes in the working directory.

// • git fetch :: downloads the references from a remote repository to the local own. if there are updates, it creates a new branch. 
// • git pull :: fetches changes AND merges them to the local branch.

// G I T   T A G S
// Tags are often used to mark release points in the project, and pushing a tag allows others to see and use that specific release.

// T Y P E S  O F  T A G S

// 1) Annotated Tags - More detailed
// • git tag -a v1.0 -m "testing tag for module02" ::: example
// -a ::: means its an annotated tag
// v1.0 ::: tag name

// • git push origin v1.0 --- is used when you want to push a specific version or milestone (marked by a tag) to the remote.
// • git push origin main --- is used to push your latest code changes on the main branch to the remote repository.

// • git tag -- lists all the tags

// • git tag -d v1.0 -- deletes tag

// 2) Lightweight Tags - Simple pointers
// git tag v1.0 ::: example