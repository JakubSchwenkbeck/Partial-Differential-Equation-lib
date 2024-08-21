var documenterSearchIndex = {"docs":
[{"location":"manual/#PDEngine-Library-Manual","page":"Manual","title":"PDEngine Library Manual","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Welcome to the manual for the PDEngine Library. This document provides detailed instructions on how to use the functions available in the library for solving various partial differential equations (PDEs) using Julia.","category":"page"},{"location":"manual/#Heat-Equation-Solver","page":"Manual","title":"Heat Equation Solver","text":"","category":"section"},{"location":"manual/#Finite-Difference-Method-(FDM)","page":"Manual","title":"Finite Difference Method (FDM)","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Function Signature:   function heat_eq_1d_fdm(N, α, T, Δx, Δt)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Description:   Solves the 1D heat equation using the finite difference method.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Arguments:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N: Number of grid points (excluding boundaries)\nα: Thermal diffusivity\nT: Total simulation time\nΔx: Spatial step size\nΔt: Temporal step size","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Returns:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u: Final temperature distribution","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Example Usage:   To solve the 1D heat equation using FDM with a grid of 50 points, thermal diffusivity of 1, and a total simulation time of 1.0, use the following parameters:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N = 50\nα = 1\nT = 1.0\nΔx = 1.0 / N\nΔt = 0.001","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Call the function as follows:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u_fdm = heat_eq_1d_fdm(N, α, T, Δx, Δt)","category":"page"},{"location":"manual/#Finite-Element-Method-(FEM)","page":"Manual","title":"Finite Element Method (FEM)","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Function Signature: function heateq1d_fem(N, α, T, Δx, Δt)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Description: Solves the 1D heat equation using the finite element method.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Arguments:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N: Number of grid points (excluding boundaries) α: Thermal diffusivity T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u: Final temperature distribution Example Usage: To solve the 1D heat equation using FEM with the same parameters as above, use:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N = 50 α = 1 T = 1.0 Δx = 1.0 / N Δt = 0.001 Call the function as follows:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u_fem = heat_eq_1d_fem(N, α, T, Δx, Δt)","category":"page"},{"location":"manual/#Crank-Nicolson-Method-(CN)","page":"Manual","title":"Crank-Nicolson Method (CN)","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Function Signature: function heateq1dcranknicolson(N, α, T, Δx, Δt)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Description: Solves the 1D heat equation using the Crank-Nicolson method.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Arguments:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N: Number of grid points (excluding boundaries) α: Thermal diffusivity T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u: Final temperature distribution Example Usage: To solve the 1D heat equation using CN with the same parameters, use:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N = 50 α = 1 T = 1.0 Δx = 1.0 / N Δt = 0.001 Call the function as follows:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u_cn = heat_eq_1d_crank_nicolson(N, α, T, Δx, Δt)","category":"page"},{"location":"manual/#Navier-Stokes-Solver","page":"Manual","title":"Navier-Stokes Solver","text":"","category":"section"},{"location":"manual/#2D-Navier-Stokes-Equations","page":"Manual","title":"2D Navier-Stokes Equations","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Function Signature: function navierstokes2d_solver(N, Re, T, Δx, Δt)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Description: Solves the 2D Navier-Stokes equations for incompressible flow.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Arguments:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N: Number of grid points in each dimension (excluding boundaries) Re: Reynolds number T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u: Velocity field p: Pressure field Example Usage: To solve the 2D Navier-Stokes equations with a grid of 50x50 points and a Reynolds number of 100, use:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N = 50 Re = 100 T = 1.0 Δx = 1.0 / N Δt = 0.001 Call the function as follows:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u, p = navier_stokes_2d_solver(N, Re, T, Δx, Δt)","category":"page"},{"location":"manual/#Poisson's-Equation-Solver","page":"Manual","title":"Poisson's Equation Solver","text":"","category":"section"},{"location":"manual/#Finite-Difference-Method-(FDM)-2","page":"Manual","title":"Finite Difference Method (FDM)","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Function Signature: function poisson2dfdm(N, f, Δx)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Description: Solves 2D Poisson's equation using the finite difference method. Poisson's equation is given by: ∇²u = -f where f is a source term.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Arguments:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N: Number of grid points along each dimension (excluding boundaries) f: Source term (function or matrix) Δx: Spatial step size Returns:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u: The final solution field Example Usage: To solve 2D Poisson's equation with a source term and a grid of 50x50 points:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N = 50 f = ... (define your source term) Δx = 1.0 / N Call the function as follows:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u = poisson_2d_fdm(N, f, Δx)","category":"page"},{"location":"manual/#Finite-Element-Method-(FEM)-2","page":"Manual","title":"Finite Element Method (FEM)","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Function Signature: function poisson2dfem(N, f, Δx)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Description: Solves 2D Poisson's equation using the finite element method (FEM). Poisson's equation is given by: ∇²u = -f where f is a source term.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Arguments:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N: Number of grid points along each dimension (excluding boundaries) f: Source term (function) Δx: Spatial step size Returns:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u: The final solution field in grid format Example Usage: To solve 2D Poisson's equation using FEM with a grid of 50x50 points:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N = 50 f = ... (define your source term) Δx = 1.0 / N Call the function as follows:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u = poisson_2d_fem(N, f, Δx)","category":"page"},{"location":"manual/#Wave-Equation-Solver","page":"Manual","title":"Wave Equation Solver","text":"","category":"section"},{"location":"manual/#Finite-Difference-Method-(FDM)-3","page":"Manual","title":"Finite Difference Method (FDM)","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Function Signature: function waveeq1d_fdm(N, c, T, Δx, Δt)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Description: Solves the 1D wave equation using the finite difference method. The wave equation is given by: ∂²u/∂t² = c² ∇²u where c is the wave speed.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Arguments:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N: Number of spatial grid points (excluding boundary points) c: Wave speed T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u: The final displacement field Example Usage: To solve the 1D wave equation with a grid of 50 points and a wave speed of 1.0:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N = 50 c = 1.0 T = 1.0 Δx = 1.0 / N Δt = 0.001 Call the function as follows:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u = wave_eq_1d_fdm(N, c, T, Δx, Δt)","category":"page"},{"location":"manual/#Finite-Element-Method-(FEM)-3","page":"Manual","title":"Finite Element Method (FEM)","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Function Signature: function waveeq1d_fem(N, c, T, Δx, Δt)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Description: Solves the 1D wave equation using the finite element method (FEM). The wave equation is given by: ∂²u/∂t² = c² ∇²u where c is the wave speed.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Arguments:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N: Number of spatial grid points (excluding boundary points) c: Wave speed T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"u: The final displacement field Example Usage: To solve the 1D wave equation using FEM with a grid of 50 points:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"N = 50 c = 1.0 T = 1.0 Δx = 1.0 / N Δt = 0.001 Call the function as follows:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia u = wave_eq_1d_fem(N, c, T, Δx, Δt)","category":"page"},{"location":"reference/#PDEngine-Library-Reference","page":"Reference","title":"PDEngine Library Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"This document provides detailed API documentation for the functions in the PDEngine Library. Each function is described with its signature, arguments, and return values.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Functions","category":"page"},{"location":"reference/#heat_eq_1d_fdm","page":"Reference","title":"heat_eq_1d_fdm","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Signature:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"function heat_eq_1d_fdm(N, α, T, Δx, Δt)","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Description:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Solves the 1D heat equation using the finite difference method.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Arguments:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"N: Number of grid points (excluding boundaries) α: Thermal diffusivity T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"u: Final temperature distribution","category":"page"},{"location":"reference/#heat_eq_1d_fem","page":"Reference","title":"heat_eq_1d_fem","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Signature:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"function heat_eq_1d_fem(N, α, T, Δx, Δt)","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Description:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Solves the 1D heat equation using the finite element method.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Arguments:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"N: Number of grid points (excluding boundaries) α: Thermal diffusivity T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"u: Final temperature distribution","category":"page"},{"location":"reference/#heat_eq_1d_crank_nicolson","page":"Reference","title":"heat_eq_1d_crank_nicolson","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Signature:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"function heat_eq_1d_crank_nicolson(N, α, T, Δx, Δt)","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Description:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Solves the 1D heat equation using the Crank-Nicolson method.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Arguments:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"N: Number of grid points (excluding boundaries) α: Thermal diffusivity T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"u: Final temperature distribution","category":"page"},{"location":"reference/#navier_stokes_2d_solver","page":"Reference","title":"navier_stokes_2d_solver","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Signature:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"function navier_stokes_2d_solver(N, Re, T, Δx, Δt)","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Description:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Solves the 2D Navier-Stokes equations for incompressible flow.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Arguments:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"N: Number of grid points in each dimension (excluding boundaries) Re: Reynolds number T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"u: Velocity field p: Pressure field","category":"page"},{"location":"reference/#poisson_2d_fdm","page":"Reference","title":"poisson_2d_fdm","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Signature:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"function poisson_2d_fdm(N, f, Δx)","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Description:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Solves 2D Poisson's equation using the finite difference method. Poisson's equation is given by: ∇²u = -f where f is a source term.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Arguments:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"N: Number of grid points along each dimension (excluding boundaries) f: Source term (function or matrix) Δx: Spatial step size Returns:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"u: The final solution field","category":"page"},{"location":"reference/#poisson_2d_fem","page":"Reference","title":"poisson_2d_fem","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Signature:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"function poisson_2d_fem(N, f, Δx)","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Description:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Solves 2D Poisson's equation using the finite element method (FEM). Poisson's equation is given by: ∇²u = -f where f is a source term.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Arguments:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"N: Number of grid points along each dimension (excluding boundaries) f: Source term (function) Δx: Spatial step size Returns:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"u: The final solution field in grid format","category":"page"},{"location":"reference/#wave_eq_1d_fdm","page":"Reference","title":"wave_eq_1d_fdm","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Signature:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"function wave_eq_1d_fdm(N, c, T, Δx, Δt)","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Description:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Solves the 1D wave equation using the finite difference method. The wave equation is given by: ∂²u/∂t² = c² ∇²u where c is the wave speed.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Arguments:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"N: Number of spatial grid points (excluding boundary points) c: Wave speed T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"u: The final displacement field","category":"page"},{"location":"reference/#wave_eq_1d_fem","page":"Reference","title":"wave_eq_1d_fem","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Signature:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"function wave_eq_1d_fem(N, c, T, Δx, Δt)","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Description:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Solves the 1D wave equation using the finite element method (FEM). The wave equation is given by: ∂²u/∂t² = c² ∇²u where c is the wave speed.","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Arguments:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"N: Number of spatial grid points (excluding boundary points) c: Wave speed T: Total simulation time Δx: Spatial step size Δt: Temporal step size Returns:","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"u: The final displacement field","category":"page"},{"location":"#PDEngine-Documentation","page":"Home","title":"PDEngine Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Welcome to the PDEngine Library documentation! This library provides numerical methods for solving partial differential equations (PDEs) using Julia. Below you will find descriptions of the available functions, methods for solving heat equations and Navier-Stokes equations, and instructions for usage.","category":"page"},{"location":"#Table-of-Contents","page":"Home","title":"Table of Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Getting Started\nHeat Equation Solver\nNavier-Stokes Solver\nPoisson's Equation Solvers\nWave Equation Solvers\nManual\nReference","category":"page"},{"location":"#Getting-Started","page":"Home","title":"Getting Started","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To use the PDE Library, include the package in your Julia environment. You can then call the functions provided to solve various PDEs.","category":"page"},{"location":"#Heat-Equation-Solver","page":"Home","title":"Heat Equation Solver","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The heat equation solver includes methods for solving the 1D heat equation using:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Finite Difference Method (FDM)\nFinite Element Method (FEM)\nCrank-Nicolson Method (CN)","category":"page"},{"location":"#Navier-Stokes-Solver","page":"Home","title":"Navier-Stokes Solver","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The Navier-Stokes solver provides methods to solve the 2D Navier-Stokes equations for incompressible flow.","category":"page"},{"location":"#Poisson's-Equation-Solvers","page":"Home","title":"Poisson's Equation Solvers","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The Poisson's equation solvers include methods for solving the 2D Poisson's equation using:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Finite Difference Method (FDM)\nFinite Element Method (FEM)","category":"page"},{"location":"#Wave-Equation-Solvers","page":"Home","title":"Wave Equation Solvers","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The wave equation solvers include methods for solving the 1D wave equation using:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Finite Difference Method (FDM)\nFinite Element Method (FEM)","category":"page"},{"location":"#Manual","page":"Home","title":"Manual","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For detailed instructions on how to use the functions and examples, refer to the Manual.","category":"page"},{"location":"#Reference","page":"Home","title":"Reference","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For detailed API documentation, refer to the Reference.","category":"page"}]
}
