---
title: Maths Research | Stefano Silvestri Ph.D.
description: Stefano Silvestri explains his current math research focus. He describes the maths he currently pursues as an independent researcher.
layout: base.njk
carbonLink: https://www.websitecarbon.com/website/silvestristefano-github-io-maths-research-current/
eleventyNavigation:
  key: Current
  parent: Maths
  order: 210
navOptions:
  includeSelf: true
modifiedOn: 2026-08-29
---

{% set siblingPages = collections.all | eleventyNavigation("Maths") %}
{% secondaryNavigation collections.all | eleventyNavigationBreadcrumb("Maths", { includeSelf: true }), siblingPages, page  %}

## Research Focus
My research interests lie in complex dynamical systems, iterated function systems, symbolic dynamics, and fractal geometry. Aperiodic tilings &amp; quasicrystals are also quite intriguing but I have yet to make any contribution on them.

## Current projects overview

When I am not working for OLab, I have been focused on two main projects: one in Fractal Geometry and one in Complex Dynamics. What follows is a brief overview of these projects. They are work in progress, so some statements are vague on purpose.

### Extreme points of self-affine limit sets
The main objective is to give an answer to the following problem 

Devise a general practical method for finding the convex hull of Iterated Function Systems (IFS) fractals, meaning the exact locations of the extreme points. Determine *a priori* from the IFS parameters, if the generated fractal will have a finite or infinite number of extreme points. {data-type=problem aria-label=problem}

Various numerical methods have been devised to find an approximation to the convex hull of IFS fractals and, most recently, [J. Vass](http://dx.doi.org/10.1142/S0218348X18500020) has found an algorithm to determine *exactly* the convex hull of a large class of linear IFS fractals. The type of IFS fractals studied by Vass are usually referred to as *self-similar* sets: they are attractors of IFS defined with linear contraction similarities of the form $f(z)=\lambda z+ c$ for some $\lambda\in\mathbb{D}\setminus\{0\}$ and $c\in\mathbb{C}$. His algorithm can be used for homogeneous as well as non-homogeneous IFS. 

**Homogeneous** IFS are those where the functions all share the same linear part: some famous examples are *wild* and *tame* $k$-*dragons*, *Sierpi&#324;ski* $k$-*gons*, and *Bedford-McMullen carpets*. **Non-homogeneous** IFS are those where different scaling factors are allowed, like the *L&eacute;vy*, *Koch*, *Kiesswetter*, and *Takagi* curves.

In a recent article, my co-author and I, improve on the result of Vass by expanding to the self-affine class of IFS and by determining the set of extreme points directly from the IFS parameters. In fact, we show that the extreme points are described by a **directed graph IFS**, a generalization of iterated function systems. The key of the argument was noticing a particular property: the convex hull of the attractor has some of its sides inside those of a scaled copy of the convex hull of the translation components in the functions defining the IFS.

The non-homogeneous case is particularly insidious given that the key property of the convex hull of the attractor does not immediately generalize. Nonetheless, there are some families of non-homogeneous IFS which have been studied and we are working on extending our results to them. In particular, we show that are results are extendable for IFS such as ***Generalized Przytyci-Urba&nacute;ski sets***, ***Fibonacci IFS***, and ***Symmetric Binary Trees***.


### Quasisymmetric conjugacy between rational dynamics and IFS
Fix $N\geq2$ and consider the IFS $\left\{f_j(z)=\lambda z+\zeta_N^j\right\}_{j=0}^{N-1}$ where $\zeta_N^N=1$ and let $A$ denote the associated attractor. Suppose that $\lambda\in\mathbb{D}\setminus\{0\}$ is such that $f_0(A)\cap f_1(A)$ is a singleton. Then there exists (see [C. Bandt &amp; M. Mesing](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.505.5694&rep=rep1&type=pdf)) an algebraic object, called the ***neighbor graph***: the set 
$$NG=\left\{f_{i_0\cdots i_k}^{-1}f_{j_0\cdots j_k}~:~f_{i_0\cdots i_k}(A)\cap f_{j_0\cdots j_k}(A)\neq\emptyset~\forall k\geq0\right\}$$
is the vertex set of a directed graph whose edges connects $f_{i_0\cdots i_k}^{-1}f_{j_0\cdots j_k}$ to $f_{i_0\cdots i_{k+1}}^{-1}f_{j_0\cdots j_{k+1}}$ with label $(i_{k+1},j_{k+1})$. Except for the root, each vertex $h$ of $NG$ corresponds to a boundary set $A\cap h(A)$ and the first labels $i_0i_1\cdots$ of the infinite paths starting in $h$ give the addresses of the points of this boundary set. If the neighbor graph is finite, the set of labels of finite paths forms a regular language on the alphabet $\{ij~:~i,j\in\{0,\cdots, N-1\}\}$. We say that $A$ is of ***finite type*** if the graph $NG$ is finite. In this case, from each vertex there starts a path which ends in a directed cycle. A *terminal cycle* in $NG$ is a directed cycle without any diagonal edge or double edge or any edge leading out of the cycle. Each vertex $h$ on a terminal cycle represents a one-point boundary set, with a single periodic address given by the first labels of the cycle. A vertex $h$ of $NG$ is called *terminal* if only terminal cycles can be reached from it. If $n$ paths to terminal cycles start in the terminal vertex $h$, then this vertex represents a boundary set of $n$ points, all with preperiodic addresses. A finite type fractal is ***post-critically finite*** (abbreviated as p.c.f.), in the sense of [A. Kameyama](https://iopscience.iop.org/article/10.1088/0951-7715/13/1/308), if all cycles in $NG$ are terminal cycles. 

[C. Bandt](https://mathscinet.ams.org/mathscinet-getitem?mr=1912290) observed that the results of Kameyama imply that for a finite type fractal which is p.c.f. there exists a map $q:A\to A$ whose inverse branches are the contractions of an IFS geometrically similar to $\{f_j\}_{j=0}^{N-1}$. The overlap set $O$ is the critical set in the sense that $q$ is not a local homeomorphism precisely at $O$. If there exists a rational function $p$ with the Julia set $J$ such that the dynamical system $(A, q)$ and $(J,p)$ are conjugate, then the conjugacy is automatically ***quasisymmetric*** whenever $p$ is semi-hyperbolic and $A$ is of bounded turning (see [K.L. Ero&#287;lu, S. Rohde, &amp; B. Solomyak](https://www.cambridge.org/core/journals/ergodic-theory-and-dynamical-systems/article/quasisymmetric-conjugacy-between-quadratic-dynamics-and-iterated-function-systems/F7D829F84D00CEC3F3801D8BE1B06470) and [P. Haïssinski and K. Pilgrim](https://hal.science/hal-00530841/fr/).

There are a few interesting topics to investigate that arise from studying the conjecture.

#### Bounded Turning
In general not all Misiurewicz parameter $c$ have a corresponding $\lambda$. When $N=2$, for example, the parameter $c=i$, according to the results of [K.L. Ero&#287;lu, S. Rohde, &amp; B. Solomyak](https://www.cambridge.org/core/journals/ergodic-theory-and-dynamical-systems/article/quasisymmetric-conjugacy-between-quadratic-dynamics-and-iterated-function-systems/F7D829F84D00CEC3F3801D8BE1B06470), should correspond to $\lambda=0.5(1+i)$ but the associated attractor is not a dendrite. Their proof of quasisymmetry is similar in spirit to the proof of McMullen and Sullivan of quasiconformality of conjugacies between hyperbolic rational maps. Is there some sort of Thurston obstruction that prevents some Misiurewicz parameter? In [K.L. Ero&#287;lu, S. Rohde, &amp; B. Solomyak](https://www.cambridge.org/core/journals/ergodic-theory-and-dynamical-systems/article/quasisymmetric-conjugacy-between-quadratic-dynamics-and-iterated-function-systems/F7D829F84D00CEC3F3801D8BE1B06470) the bounded turning property of $A$ plays a key role in showing the quasisymmetry of the conjugacy, however the finiteness of the overlap set of $A$ is not known to imply this property. 

#### Core entropy
When $N=2$, I have experimental evidence of a curious phenomenon whereby IFSs corresponding to Misiurewicz parameters in the above sense always display very high entropies: the external ray landing at $c$ has an angle $\theta$ which is either dyadic or there exists some positive constant $M$ for which $h(\theta_{max})-M<h(\theta)<h(\theta_{max})+M$, where $h$ is the core entropy function and $\theta_{max}$ is the dyadic angle in the interval $(\theta_l,\theta_r)$ around $\theta$ at which $h$ reaches a local maximum. Which dyadic angles allow for the conjugacy to exists? Does the constant $M$ depend on $\theta$? What are the bounds, if any, on $M$?

#### Laminations
According to the recent work by [D. Calegari and A. Walker](https://arxiv.org/abs/2608.12774), when $N=2$ and $\lambda$ is taken from the boundary of the set $\mathcal{B}_N:=\{\lambda\in\mathbb{D}~:~A\text{ is connected}\}$ the action of the semigroup on $\partial A$ is topologically conjugate to a (discontinuous) piecewise linear action of constant slope. The proof uses the Milnor-Thurston's kneading theory. They further prove that the structure of the action of the semigroup on $\partial A$ recovers and generalizes the Douady-Hubbard-Thurston quadratic minor lamination for the abstract Mandelbrot set. 

In particular, when $\lambda\in\partial\mathcal{B}_2$ is such that $A$ is a dendrite and post-critically finite, then there are, under their conjugacy, corresponding parameters in the $1/3$ bulb of the Mandelbrot set which have a recognizable structure. Understanding and formalizing these observations might shine some light on the questions raised in the previous topic. Is it possible to extend their result for $N>2$? 

#### Sprouts
For $N\geq2$, [A. Tetenov, I. Yudin, and D. Drozdov](https://arxiv.org/abs/2605.11833) recently defined a finite acyclic edge-labeled bipartite graph $\Gamma$ on a large class of self-similar sets $A$, which include the post-critically finite, called the sprout of $A$. They show that $\Gamma$ determines the combinatorial properties of the attractor and its topological structure. It ishould be possible to show that the sprout of $A$ has an equivalent construction to that of the neighbor graph and $\Gamma$ can be thought as the ''Hubbard graph'', ( [A. Kameyama](https://link.springer.com/article/10.1007/BF03167204) in 1993 called them ''frames'') for a rational map. As supporting evidence, when $N=2$, $\Gamma$ equals $NG\setminus\{id\}$ and it is identical to the Hubbard tree of a Misiurewicz parameter with the addition of the branch labeling of the edges. What properties of Hubbard tree/graphs prevent the topological conjucagy to exists?
