# Exercise
The goal of this exercise is to write a small program
that downloads data from RCSB PDB, the database of molecular
structures, and performs a simple calculation. This repository
contains pre-written functions that query and download a 
specific PDB file (one molecule).

Your goal is to complete the script to calculate the center
of mass of a particular molecule of your choice. Below are some
concepts you should familiarize yourself with to understand the
exercise.

## PDB Files
A PDB file describes the 3-dimensional coordinates of a molecule.
For each 'ATOM' line, you will have a series of fields, three of
which correspond to the x, y, and z coordinates (respectively) of
one atom of the molecule. If the entire line is seen as an array,
the coordinates are stored in the following subarrays:
- x is stored at positions 30 to 38
- y is stored at positions 38 to 46
- z is stored at positions 46 to 54

You have to write a function that given the entire PDB file as a 
single string, divides it in lines and then, for each lines, extracts
these x,y,z coordinates into separate arrays.

## Center of Mass
The center of mass of a molecule is a 3-item array where each component
is the average of all x, y, and z coordinates for all atoms in the molecule.
In short, to calculate the center of mass, you have to sum all values of x
and divide by the number of atoms in the molecule, same for y, and same for z.

# Web Page
The web page is hosted on github: https://joaorodrigues.github.io/molcom-js/
