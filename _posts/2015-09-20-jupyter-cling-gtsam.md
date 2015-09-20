

```c++
.I /Users/dta-huynh/install/include/
```

    


```c++
.I /Users/dta-huynh/install/include/gtsam/3rdparty/Eigen/
```

    


```c++
.I /opt/local/include
```

    


```c++
.L libgtsam
```

    


```c++
#include <gtsam/geometry/Pose3.h>
```

    


```c++
using namespace gtsam;
```

    


```c++
Pose3 x;
```

    


```c++
x.print("x = ");
```

    x = R:
    [
               1,	         0.0,	         0.0,	
             0.0,	           1,	         0.0,	
             0.0,	         0.0,	           1,	
    ];
    t: [0, 0, 0]';



```c++
#include <gtsam/nonlinear/NonlinearFactorGraph.h>
```

    In file included from input_line_7:1:
    In file included from /Users/dta-huynh/install/include/gtsam/nonlinear/NonlinearFactorGraph.h:25:
    In file included from /Users/dta-huynh/install/include/gtsam/nonlinear/NonlinearFactor.h:23:
    In file included from /Users/dta-huynh/install/include/gtsam/nonlinear/Values.h:510:
    [1m/Users/dta-huynh/install/include/gtsam/nonlinear/Values-inl.h:269:43: [0m[0;1;35mwarning: [0m[1m
          expression with side effects will be evaluated despite being used as an
          operand to 'typeid' [-Wpotentially-evaluated-expression][0m
          throw ValuesIncorrectType(j, typeid(*item->second), typeid(ValueType));
    [0;1;32m                                          ^
    [0m[1m/Users/dta-huynh/install/include/gtsam/nonlinear/Values-inl.h:284:45: [0m[0;1;35mwarning: [0m[1m
          expression with side effects will be evaluated despite being used as an
          operand to 'typeid' [-Wpotentially-evaluated-expression][0m
            throw ValuesIncorrectType(j, typeid(*item->second), typeid(ValueType));
    [0;1;32m                                            ^
    [0m


```c++
#include <gtsam/nonlinear/GaussNewtonOptimizer.h>
```

    


```c++
#include <gtsam/slam/PriorFactor.h>
```

    


```c++
NonlinearFactorGraph graph;
```

    


```c++
graph.push_back(PriorFactor<Pose3>(1, Pose3(), noiseModel::Unit::Create(6)));
```

    


```c++
graph.print("Graph: ");
```

    Graph: size: 1
    
    Factor 0: PriorFactor on 1
      prior mean: R:
    [
               1,	         0.0,	         0.0,	
             0.0,	           1,	         0.0,	
             0.0,	         0.0,	           1,	
    ];
    t: [0, 0, 0]';
      noise model: unit (6) 
    



```c++
Values init;
```

    


```c++
init.insert(1, Pose3());
```

    


```c++
init.print("Initial values: ");
```

    Initial values: Values with 1 values:
    Value 1: (N5gtsam5Pose3E) R:
    [
               1,	         0.0,	         0.0,	
             0.0,	           1,	         0.0,	
             0.0,	         0.0,	           1,	
    ];
    t: [0, 0, 0]';



```c++
GaussNewtonOptimizer opt(graph, init);
```

    


```c++
opt.optimize().print("optimal values: ");
```

    optimal values: Values with 1 values:
    Value 1: (N5gtsam5Pose3E) R:
    [
               1,	         0.0,	         0.0,	
             0.0,	           1,	         0.0,	
             0.0,	         0.0,	           1,	
    ];
    t: [0, 0, 0]';



```c++

```
