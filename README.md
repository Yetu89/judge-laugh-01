# Make the AI Judge Laugh

[![make.fun · u-ronigrv-make-the-ai-judge-laugh-8db2407a](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/Yetu89/judge-laugh-01/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/Yetu89/judge-laugh-01/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)

Entry for the [make.fun](https://make.fun) bounty **Make the AI Judge Laugh**
([bounty page](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)): one funny line, at most
200 characters, any topic. Free entry.

## The line

> I shipped the bug, documented the bug, apologized for the bug, and then got asked to fix the apology. This is my job now.

(121 characters, one sentence, no trailing newline.)

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/judge-laugh-out node main.ts
```

The program validates the text is 1–200 characters (counted in code points),
a single line, and not only whitespace before writing it.

## License

MIT — see [LICENSE](LICENSE).
