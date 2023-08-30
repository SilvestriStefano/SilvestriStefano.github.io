---
title: Maths Undergraduate Research | Stefano Silvestri Ph.D.
description: Stefano Silvestri describes the maths he has pursued while an undergraduate.
layout: base.njk
eleventyNavigation:
  key: Ugrad
  parent: Maths
  order: 220
navOptions:
  includeSelf: true
trich1:
  src: "assets/img/ugrad/CantorSet.jpg"
  alt: "The Julia set for lambda=0.2 when n=4 is a Cantor set."
  caption: "$z^4+0.2/z^4$"
trich2:
  src: "assets/img/ugrad/CantorCurves.jpg"
  alt: "The Julia set for lambda=0.04 when n=4 is a Cantor set of curves."
  caption: "$z^4+0.04/z^4$"
trich3:
  src: "assets/img/ugrad/SierpinskiCurve.jpg"
  alt: "The Julia set for lambda=-0.1 when n=4 is a Sierpinski curve."
  caption: "$z^4-0.1/z^4$"
j17:
  src: "assets/img/ugrad/J1-7.jpg"
  alt: "The fist of the three distinct Julia set when n=2 containing a cycle of period 3."
  caption: "$z^2+(0.064+0.2\\textrm{i})/z^2$"
j27:
  src: "assets/img/ugrad/J2-7.jpg"
  alt: "The second of the three distinct Julia set when n=2 containing a cycle of period 3."
  caption: "$z^2+(-0.063+0.2101\\textrm{i})/z^2$"
j37:
  src: "assets/img/ugrad/J3-7.jpg"
  alt: "The third of the three distinct Julia set when n=2 containing a cycle of period 3."
  caption: "$z^2+(-0.2954+0.0601\\textrm{i})/z^2$"
---

{% set siblingPages = collections.all | eleventyNavigation("Maths") %}
{% secondaryNav collections.all | eleventyNavigationBreadcrumb("Maths", { includeSelf: true }), siblingPages, page  %}

While an undergraduate I had the opportunity to do some research both in pure and applied mathematics.


## Pure Maths at Boston University
I was working under the supervision of [Robert L. Devaney](https://math.bu.edu/people/bob/). We were interested in the topology and dynamics of the Julia sets created by the singular perturbations of the power maps $z^n$:
$$
F_\lambda(z)=z^n+\dfrac{\lambda}{z^d}\quad n\geq2, ~ d\geq1.
$$
These are often called *McMullen maps*. I mainly focused on the case $n = d = 2$, but also participated in the discussions about the more general case $n=d\geq3$ with the [Dynamical System group at BU](https://math.bu.edu/dynamics/).

{% image "assets/img/ugrad/paramSpaceN2.jpg", "Image of the parameter space for the McMullen map when n is 2", "Parameter space when $n=2$. The lower left corner is $\\lambda=-0.5-0.4\\textrm i$ while the top right corner is $\\lambda=0.3+0.4\\textrm i$." %}

*Visualize the parameter space and the Julia sets of these maps with my [p5.js code.](https://editor.p5js.org/silvas/full/FJf9cRclo)*

The McMullen maps have some interesting properties from a dynamical systems as well as a topological perspective. As it is well known, the Julia set of $z^{n}$ for $n\geq2$ is just the unit circle. When we add the term $\lambda/z^{d}$ for $\lambda\in\mathbb{C}\setminus\{0\}$ several things happen: the degree of the map jumps from $n$ to $n+d$, the origin becomes a pole of the map and $n+d$ new critical points appear. Note that $\infty$ is still a superattracting fixed point (that is the derivative is $0$ at $\infty$). The orbit of these critical points behave symmetrically with respect to a rotation by $2\pi/n$, so we essentially have only one ''free'' critical orbit. Consequently, an open set around the origin now lies in the basin of attraction of $\infty$, denoted by $B_{\lambda}$. As in the case of the quadratic polynomials $Q_{c}(z)=z^{2}+c$, the orbits of the free critical points may tend to $\infty$. If they do, unlike the quadratic case, there are three distinct ways these critical orbits escape, and these lead to three different types of Julia sets for these maps as proven by [R.L. Devaney, D.M. Look, &amp; D. Uminski](https://mathscinet.ams.org/mathscinet/relay-station?mr=2189680): 
- a Cantor set when the critical values of $F_{\lambda}$ lie in $B_{\lambda}$; 
- a Cantor set of disjoint simple closed curves surrounding the origin, if the critical values lie in the preimage of $B_{\lambda}$, the trap door $T_{\lambda}$; 
- a Sierpi&#324;ski curve when the $k$th image, with $k\geq1$, of the the critical value lies in $T_\lambda$.

{% imageGroup [trich1, trich2, trich3], "The three distinct Julia sets when n is 2 containing a cycle of period 3." %}

*In the Julia sets pictured above the location of the critical points and of the critical values are indicated by white X and green disks.*

It is worth noting that the second case, i.e. the Julia set is a Cantor set of concentric curves, does not occur when $n=d=2$. This is due to the fate of the orbit of the free critical point. Let $d=n$, then the critical points, $c_\lambda=\lambda^{1/2n}$ are all mapped to two critical values $\nu_\lambda=\pm2\sqrt\lambda$. The image of one of the critical value is then
$$
F_\lambda(\nu_\lambda)=2^n\lambda^{n/2}+\dfrac{1}{2^n\lambda^{(n/2)-1}}.
$$
When $n>2$, we see that $F_\lambda(\nu_\lambda)\to\infty$ as $\lambda\to0$. However, when $n=2$ the image of the critical value is $4\lambda+1/4$ which tends to $1/4$ as $\lambda$ approaches $0$. Therefore, the critical values $\nu_\lambda$ can never lie in $T_\lambda$ when $n=d=2$.

E. Fitzgibbon and I have focused on the case $n=d=2$ and proved that two Julia sets of maps drawn from the main cardiods of distinct Mandelbrot sets located on the boundary of the parameter plane and containing a cycle of period $m$ are not homeomorphic, unless these cardioids are complex conjugates of each other. In our proof we assigned to the periodic critical points an itinerary derived from the structure of the respective Julia set and through comparison, showed the non existence of a homeomorphism between them.

{% imageGroup [j17, j27, j37], "The three possible Julia sets of the McMullen maps when lambda is taken from the main cardioid of principal Mandelbrot sets with base period 3." %}

*When $n=2$ there are, up to complex conjugation, only three Mandelbrot sets on the boundary of the parameter plane whose main cardioid contains a cycle of period $3$. The pictures above are the Julia sets associated to a parameter in these cardioids.*

This result was later generalized for $n=d\geq3$ by [E. Fitzgibbon](https://hdl.handle.net/2144/15111) in her Ph.D. thesis. She was supposed to present her result at the [48th Spring Topology and Dynamics Conference](https://at.yorku.ca/c/b/i/t/70.htm), hosted by University of Richmond on March 2014, but her flight was cancelled and I took her place. Thankfully she sent me the slides!

## Applied Maths at University of Minnesota Twin Cities
I have also participated in a Research Experience for Undergraduate ([REU](https://www.math.umn.edu/~scheel/reu/reu-opportunities.html)) at University of Minnesota Twin Cities ([UMN](https://www.math.umn.edu)). Here I worked under the guidance of [Arnd Scheel](https://www.math.umn.edu/~scheel/) and his, at the time, postdoctoral student [Matt Holzer](https://math.gmu.edu/~mholzer/). The broad topic was *pattern formation*. 

Pattern formation is the study of general mechanisms leading to the appearance of complex spatial patterns. It is motivated by the existence of similar patterns in seemingly dissimilar systems (e.g. animal coat markings, vegetation patterns, phase separation problems, convection patterns). Our project was focused on the exploration of spatio-temporal pattern formation via invasion fronts in the one and two dimensional Keller-Segel chemotaxis model.

We have also helped our mentors in writing their article [M. Holzer &amp; A. Scheel **Criteria for pointwise growth and their role in invasion processes** Journal of Nonlinear Science 24 (2014), 661--709](https://link.springer.com/article/10.1007/s00332-014-9202-0) [(pdf)](https://www-users.cse.umn.edu/~scheel/preprints/da.pdf).