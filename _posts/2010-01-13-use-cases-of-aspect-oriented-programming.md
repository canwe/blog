---
title: Use cases of Aspect Oriented Programming
author: Veera
layout: post
permalink: /2010/01/use-cases-of-aspect-oriented-programming/
categories:
  - Java
tags:
  - aop
  - aspect
  - cross-cutting
  - discussion
  - list
  - spring
  - use-cases
---

In my last article about **Aspect Oriented Programming** (AOP), I explained [how to use Spring AOP for profiling method execution time][1]. When the article was [posted][2] in DZone, it got a comment from [an user][3] saying that

 [1]: http://veerasundar.com/blog/2010/01/spring-aop-example-profiling-method-execution-time-tutorial/ "Spring AOP Example: Profiling method execution time tutorial"
 [2]: http://www.dzone.com/links/spring_aop_example_profiling_method_execution_tim.html
 [3]: http://www.dzone.com/links/users/profile/388907.html

> Profiling and logging seem to be to only imaginable AOP use cases.

But, I think **it is not**. Because AOP is an extensive area where a lot of examples can be shown as use cases of AOP. Here, 'Use cases' are nothing but the **cross cutting concerns** in your application. That is, the functionalities that are used by many part of your application. Logging and Profiling are the best examples and can be easily explained for the cross cutting concerns. That is why in most of the AOP tutorials you can see a logging example or profiling.

Anyway, I tried to do some search on the various AOP cross-cutting concerns (i.e. the *use cases*) that can be found in an J2EE applications. Here is the list of them. Feel free to add if I'm missing/wrongly added something.

## List of AOP Use Cases or Cross cutting concerns:

*   **Transaction Management** - in an enterprise application, you can manage the transactional requests using AOP. For example, using the *Around *advice, you can wrap the request processing method and if the method fails for some reason, in your Advice, you can roll back the particular transaction.
*   **Access control or Security **- in case you want to restrict the access to your method to a set of users, you can add these checks to the *Before *advice and verify the access credentials of the users before letting them to access your methods.
*   **Managing Quotas for your API **- if your API is being used by many third party applications with predefined quotas, you can limit the access based the usage in your AOP advice. If the usage is below the allowed limit, the Advice can let the user to call the API or blocks it otherwise. This is something similar to the Google App Engine / Amazon services quota usages. But I'm not sure how Google/Amazon has implemented the quota limiting.
*   **Exception Wrapping** - if you want to wrap a exception, thrown from your business methods, into a Common exception object and throw it to the top level layers, you can use *After throwing *advice to do the task. For example, if you want to wrap all the SQLExceptions into DAOLayerException object and throw it back to Service layer, instead of doing the exception wrapping in every single DAO method, you can implement the exception wrapping in an *After throwing advice* and it's done.
*   **Logging and Profiling - **off course, how can I leave these two? The evergreen examples(!) for the AOP.

I understand that this list is not an extensive one. So, if you have any more use cases to add this list, please leave a comment.