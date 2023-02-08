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
   - Replace the lines
   		```text
   		64           repository: Mannheim-Probability/Probability-Theory
   		...
   		86           git push git@github.com:Mannheim-Probability/Probability-Theory.git
   		``` 
   		in `deploy-html.yml` with the appropriate target repository 
   - Create the `html` branch and activate GitHub Pages for the `html` branch in the _**target**_ repository
   - Allow this repository to push to the target repository by creating an ssh deploy key and adding it as a secret (in this repository):
	 	- type `ssh-keygen` into a (local) terminal and choose a non-standard location (you want to delete the keys afterwards)
		- copy the entire content of the public key (id_rsa.pub) into `Settings> Deploy keys> Add Deploy Key` of the _**target**_ repository
		- copy the entire content of the private key (id_rsa) into `Settings> Secrets & Variables > Actions > New Repository Secret` of _**this**_ repository with the name `SSH_DEPLOY_KEY`
		- delete your local keys

	You could also push to this repository to avoid the need for ssh keys, but
	to enable github pages you need to make this repository (including the solutions) public.
	If only the target is public, the solutions will only be pushed once the due
	date has passed on the other hand.
	
