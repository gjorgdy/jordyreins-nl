# Jordy's Git Standards

## Branches
*for SCRUM projects*

**main branch** should always be stable \
|- **sprint branch** to merge to during sprints ``sprint-{i}`` \
|--- **ticket branch** to work on during a ticket ``{category}/{ticket tag}-{description}``

### Categories
**feature** \
a ticket which adds a new feature \
**bugfix** \
a ticket which fixes a bug \
**hotfix** \
a ticket which fixes a *critical* bug to be merged to the main branch \
(do this only if absolutely necessary and agreed on with the team)

#### *examples*
> master \
> |- sprint-2 \
> |--- bugfix/AB-54-blue-screen-issue

> master \
> |- sprint-4 \
> |--- hotfix/AB-142-another-blue-screen-issue

---

## Commits
**commit message scrum** ``{ticket tag} {operation}: {description}`` \
**commit message mods** ``{game version}-{opt. feature name} {operation}: {description}``

### Operations
*restricting commits to single operations helps to prevent too big commits*

**ADD** \
adding a new feature, assets or content \
**ALT** \
making a change to an existing feature \
**FIX** \
fixing an issue (this doesn't have to be in a bugfix or hotfix branch) \
**DEL** \
removing a feature, either because it was temporary or is not used anymore \
**UPD** \
on changing the version number of the project
> the description should always be the version number e.g ``1.21.10 UPD: 0.4.4+1.21.10`` \
> this commit operation may also include changing the readme and/or updating the changelog

### Description
**short** \
descriptions should be clear and concise \
**singular** \
a description should not have more than 1 *verb* \
**passive** \
preferably the description has no verbs at all \
**past** \
the change has been made, so the description should grammatically reflect that \
**DRY** \
a commit already contains the operation, no need to repeat it in the description
> you should not use ``ADD: added a login buttton``, just use ``ADD: login button``

#### *examples*
> 1.21.10 FIX: first point of areas not being saved \
> ❌ it describes the issues, not the fix

> 1.21.10 ALT: split up fabric and core logic to prepare for multiloader support \
> ❌ it uses multiple verbs: `split` and `prepare`

> SCRUM-63 FIX: 💫 spinner 💫 \
> ❌ it's not clear. what is a spinner?

> SCRUM-63 DEL: console logs

> AB-74 ADD: more simulation data points

> 1.21.10-opac ADD: listen to events for chunk claims
