---
title: "Clustering"
date: 2022-09-26
tags:
  - seed
  - CPSC340
---

Set of techniques to find components that belong together.

Note: Grouping is how the human visual system perceives things and clustering is the actual algorithm itself.

We want to assign examples to "groups"

## Methods

- [[K-means.md|K-means]] (most popular)
- [[density-based clustering](density-based%20clustering.md)
- Ensemble Clustering
  - Like [[Random Forest|random forest](Random%20Forest.md) but for voting for clustering
  - This is problematic because of the label switching problem -- we can get clustering with permuted labels on each initialisation
    - Don't vote on what specific class each cluster is
    - Instead, vote on whether points are in the same cluster (label independent)
    - Then, come up with labels after voting
- [[hierarchical clustering](hierarchical%20clustering.md)
