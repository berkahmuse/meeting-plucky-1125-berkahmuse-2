# The Meeting That Should Have Been an Email

[![make.fun](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![Rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/berkahmuse/meeting-plucky-1125-berkahmuse-2/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![Reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/berkahmuse/meeting-plucky-1125-berkahmuse-2/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

Entry for the [make.fun bounty "The Meeting That Should Have Been an Email"](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9): write one line, at most 200 characters, that makes a meeting-that-should-have-been-an-email funny.

## The entry

> The agenda's only item was to discuss an email whose only line was 'see the meeting.'

The agenda and the email point at each other and neither says anything — the meeting exists only because the email refused to be one. One sentence; the turn lands on the last word.

## How it works

`main.ts` (Node 22, no dependencies) writes the single line to `/output/entry.txt`. It is deterministic: two runs produce byte-identical output (85 characters, one line).

```sh
node main.ts
cat /output/entry.txt
```
