# Duy-Nguyen Ta — CV

LaTeX source for my CV, based on the public-domain
[simple-resume-cv](https://github.com/zachscrivena/simple-resume-cv) template
(see `LICENSE`).

## Building

Compile with [tectonic](https://tectonic-typesetting.github.io) (an
XeLaTeX-compatible engine that fetches packages automatically):

```sh
tectonic CV.tex
```

Do not add a `% !TEX TS-program = xelatex` magic comment to `CV.tex` — it
overrides the tectonic recipe in VS Code LaTeX Workshop.

## Continuous deployment

On every push touching `resume/`, GitHub Actions
(`.github/workflows/build-cv.yml`) rebuilds the PDF and commits it to the
site root, published at <https://thduynguyen.github.io/CV.pdf>.
Because CI pushes to `master`, run `git pull` before starting local edits.
