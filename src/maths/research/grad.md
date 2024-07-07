---
title: Maths Research | Stefano Silvestri Ph.D.
description: Stefano Silvestri explains his current math research focus. He describes the maths he has pursued as a graduate student at IUPUI and instructor at Butler University.
layout: base.njk
carbonLink: https://www.websitecarbon.com/website/silvestristefano-github-io-maths-research-grad/
eleventyNavigation:
  key: Grad
  parent: Maths
  order: 210
navOptions:
  includeSelf: true
dataM:
  src: "assets/img/grad/mset.png"
  alt: "The set M"
  caption: "The set $\\mathcal{M}$."
dataM0:
  src: "assets/img/grad/m0set.png"
  alt: "The set M_0"
  caption: "The set $\\mathcal{M}_0$."
attOne:
  src: "assets/img/grad/att_tile.png"
  alt: "The limit set associated to the parameter 0.25+0.6614i"
  caption: "$\\lambda=\\dfrac{1}{4}(1+\\sqrt{7}i)$"
attTwo:
  src: "assets/img/grad/att_tilev2.png"
  alt: "The limit set associated to the parameter 0.5+0.5i"
  caption: "$\\lambda=\\dfrac{1}{2}(1+i)$"
attThree:
  src: "assets/img/grad/att_onesixth.png"
  alt: "The limit set associated to the parameter 0.366+520i"
  caption: "$\\lambda\\approx 0.366+0.520i$"
---

{% set siblingPages = collections.all | eleventyNavigation("Maths") %}
{% secondaryNavigation collections.all | eleventyNavigationBreadcrumb("Maths", { includeSelf: true }), siblingPages, page  %}

## Research Focus
My research interests lie in complex dynamical systems, iterated function systems, symbolic dynamics, fractal geometry, aperiodic tilings &amp; quasicrystals.
{% image "assets/img/grad/Christiane_Hair.png", "Image of a set built by stacking Cantor sets with continuously varying scaling factors", "*Acacia Trees* (modified version of [Christiane's Hair](https://www.tandfonline.com/doi/abs/10.4169/amer.math.monthly.120.09.771)) a set built by stacking Cantor sets with continuously varying scaling factors." %}

## Research at IUPUI and Current
My research project concerns two subsets of the unit disk. The set $\mathcal{M}$ is the closure of the set of roots in $\mathbb{D}$ of polynomials with coefficients in $\lbrace-1,0,+1\rbrace$. Similarly, the set $\mathcal{M}_0$ is the closure of the set of roots in $\mathbb{D}$ of with coefficients in $\lbrace-1,+1\rbrace$, commonly known as Littlewood's polynomials. By their definition then we have $\mathcal{M}_0\subset\mathcal{M}$.

{% figureGroup [dataM, dataM0], "The two sets M and M_0" %} 

Interest in these sets spiked recently after [G. Tiozzo](https://academic.oup.com/imrn/article-abstract/2020/2/607/4948413), inspired by a conjecture of [W.P. Thurston](https://mathscinet.ams.org/mathscinet-getitem?mr=3289916), proved that $\mathcal{M}_0$ equals the closure in $\mathbb{D}$ of the set of Galois conjugates of entropies of superattracting real quadratic polynomials. From a different point of view, the set $\mathcal{M}$ is the connectedness locus of the family of iterated function systems (IFS) $\langle\mathfrak{s}_-(z), \mathfrak{s}_+(z)\rangle= \langle-1+ \lambda z, +1+ \lambda z\rangle$ namely the set of parameters $\lambda$ for which the associated limit set of the IFS is connected.

{% figureGroup [attOne, attTwo, attThree], "Three examples of limit sets: the Tame Twin Dragon, the Twin Dragon, and a Dendrite." %}

*See more attractors by playing with my [p5.js](https://p5js.org) code: [just the limit set](https://editor.p5js.org/silvas/full/3iKx8wslr) or [the limit set and parameter plane](https://editor.p5js.org/silvas/full/2GL02NekB) (the first load might take a little bit).*

The limit set is the unique invariant compact set satisfying $\mathsf{A}_\lambda=\mathfrak{s}_-(\mathsf{A}_\lambda)\cup\mathfrak{s}_+(\mathsf{A}_\lambda)$. Some examples of $\mathsf{A}_\lambda$ are shown above. The left set is $\mathfrak{s}_-(\mathsf{A}_\lambda)$, the ''minus'' copy of $\mathsf{A}_\lambda$; while the right one is $\mathfrak{s}_+(\mathsf{A}_\lambda)$, the ''plus'' copy of $\mathsf{A}_\lambda$. As you can see these attractors are symmetric with respect to center $0$, and sometimes this point is not part of the attractor. You may also notice how the plus and minus copies can touch either at a finite set of points, or a curve, or overlap substantially. In the case the overlap is nonempty, it is easy to prove that $\mathsf{A}_\lambda$ is connected (a little harder, but possible, to show locally connected). In the opposite case, the attractor is totally disconnected and, hence, homeomorphic to a Cantor set. It can be shown then that
$$
\mathcal{M}=\left\{ \lambda\in\mathbb{D}~|~\mathsf{A}_\lambda\text{ is connected} \right\}
$$ 
and 
$$
\mathcal{M}_0=\left\{\lambda\in\mathbb{D}~|~0\in\mathsf{A}_\lambda\right\}.
$$
The two sets are not at all equal! *This is not what happens with the Mandelbrot set!*.

These sets were first introduced by [M.F. Barnsley &amp; A.N. Harrington](https://mathscinet.ams.org/mathscinet-getitem?mr=793899) in the mid 1980s. In 1988-1992 [T. Bousch](https://www.math.u-psud.fr/~bousch/) proved that $\mathcal{M}$ and $\mathcal{M}_0$ are connected, and locally connected. In 2002, [C. Bandt](https://mathscinet.ams.org/mathscinet-getitem?mr=1912290) proved the existence of a hole in $\mathcal{M}$, and conjectured that there are in fact infinitely many. In 2014, [D. Calegari, S. Koch, &amp; A. Walker](https://mathscinet.ams.org/mathscinet-getitem?mr=3719268) gave a positive answer to the conjecture, for both $\mathcal{M}$ and $\mathcal{M}_0$. Furthermore, they constructed infinite sequences of holes accumulating at certain parameters in $\partial\mathcal{M}$. These are *buried points* of $\partial\mathcal{M}$, i.e. not path accessible from the complement $\mathbb{D}\setminus\mathcal{M}$.

The question of classifying these connected components of $\mathbb{D}\setminus\mathcal{M}$ is still open; however the results in my thesis, are a step in that direction. I concentrated on boundary parameters that are not buried. I gave sufficient conditions on $\lambda\in\partial\mathcal{M}$ or $\partial\mathcal{M}_0$ to guarantee it is accessible from $\mathbb{D}\setminus\mathcal{M}$. Moreover, I showed that a parameters in $\partial\mathcal{M}$ is accessible from the largest connected component of $\mathbb{D}\setminus\mathcal{M}$ by directly constructing a path connecting it to $0$.

Currently, I am working on extending these results using techniques from kneading theory and complex dynamics inspired by the work of [G. Tiozzo &amp; K. Lindsey](https://icerm.brown.edu/video_archive/?play=2099) and [K.L. Ero&#287;lu, S. Rohde, &amp; B. Solomyak](https://www.cambridge.org/core/journals/ergodic-theory-and-dynamical-systems/article/quasisymmetric-conjugacy-between-quadratic-dynamics-and-iterated-function-systems/F7D829F84D00CEC3F3801D8BE1B06470).

{% image "assets/img/grad/Uniformization.png", "Uniformization of the complement of the two parameter spaces.", "Uniformization of the complement of $\\mathcal{M}$ and $\\mathcal{M}_0$." %}

Furthermore, I am developing a combinatorial method to describe the boundary of $\mathcal{M}$ around the point $\mathrm{i}/\sqrt{2}$ using techniques developed by [C. Bandt &amp; M. Mesing](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.505.5694&rep=rep1&type=pdf).

{% image "assets/img/grad/window.png", "The set M in a neighborhood of the parameter i over square root of 2", "The set $\\mathcal{M}$ in a neighborhood of the parameter $i/\\sqrt{2}$." %}

## Student Research Mentored
In early-mid August each year the Department of Mathematics, Statistics, and Actuarial Science and the Department of Computer Science at Butler University organize the Mathematics Research Camp, a week long focused research experience for undergraduates.

In the summer of 2019 I participated as a Faculty Advisor to Jayme Brickley, a sophomore majoring in Mathematics and Chemistry. We studied the Checkerboard Julia sets associated with the McMullen maps $z\mapsto z^n+\lambda/z^d$ for integers $n\geq2$ and $d\geq1$ with $\lambda$ taken from principal Mandelbrot sets. Jayme obtained necessary and sufficient conditions on $n$ and $d$ for which all the $n+d$ critical points are strictly periodic. The proof involved mainly tools from Number Theory in addition to those from Complex Dynamics. 

Later on, Jayme presented a poster from his research at the [**Joint Math Meetings (JMM)**](https://jointmathematicsmeetings.org/meetings/national/jmm2020/2245_maasessstud#post) in January (January 15th to 18th 2020), in Denver CO. JMM is organized annually by the [**Mathematical Association of America (MAA)**](https://maa.org) and the [**American Mathematical Society (AMS)**](https://ams.org), and it is the largest mathematics meeting in the world.
