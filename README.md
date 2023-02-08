# Exercise Sheets for WT1

The macro 

```latex
\solutiontrue
```

is used to toggle the visibility of blocks of the type

```latex
\begin{solution}
...
\end{solution}
```

Similarly `\hinttrue` for the `hint` environment. Note that `\solutionfalse`
turns `\hinttrue` by default. So you only really need this one macro to
toggle between the two modes.

## Command Line Interface

Various helper programms grouped under one python command line interface
`cli.py`

Try using `--help` starting with

```shell
./cli.py --help
```

but also using this on the different commands.

## GitHub Actions

The GitHub Actions build on the Command Line Interface. So make sure it does
not break.

1. On every push to the main branch, all exercises and solutions are generated
and uploaded as artifacts of the workflow run:

	https://github.com/Mannheim-Probability/WT1-Tex-Files/actions/workflows/make-pdfs.yml

2. A website is also automatically generated from the exercise sheets,
	see: https://mannheim-probability.github.io/Probability-Theory/exercises/
