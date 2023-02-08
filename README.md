# Exercise Sheets Template 

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

2. A website can be automatically generated from the exercise sheets. For this
   you need to
   - Replace `git push git@github.com:Mannheim-Probability/Probability-Theory.git` in `deploy-html.yml` with the appropriate target repository 
   - Activate GitHub Pages for the `html` branch of this target
   - Create an ssh key for the target and add it as a `SSH_DEPLOY_KEY` secret
	 in this repository

	You could also push to this repository to avoid the need for ssh keys, but
	to enable github pages you need to make this repository (including the solutions) public.
	If only the target is public, the solutions will only be pushed once the due
	date has passed on the other hand.
	