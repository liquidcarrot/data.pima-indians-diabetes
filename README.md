# Pima Indians Diabetes Dataset

The Pima Indians Diabetes Dataset involves predicting the onset of diabetes within 5 years in Pima Indians given medical details.

It is a binary (2-class) classification problem. The number of observations for each class is not balanced. There are 768 observations with 8 input variables and 1 output variable. Missing values are believed to be encoded with zero values. The variable names are as follows:

1. Number of times pregnant.
2. Plasma glucose concentration a 2 hours in an oral glucose tolerance test.
3. Diastolic blood pressure (mm Hg).
4. Triceps skinfold thickness (mm).
5. 2-Hour serum insulin (mu U/ml).
6. Body mass index (weight in kg/(height in m)^2).
7. Diabetes pedigree function.
8. Age (years).
9. Class variable (0 or 1).

The baseline performance of predicting the most prevalent class is a classification accuracy of approximately 65%. Top results achieve a classification accuracy of approximately 77%.

A sample of the first 5 rows is listed below.

**CSV**

```csv
6,148,72,35,0,33.6,0.627,50,1
1,85,66,29,0,26.6,0.351,31,0
8,183,64,0,0,23.3,0.672,32,1
1,89,66,23,94,28.1,0.167,21,0
0,137,40,35,168,43.1,2.288,33,1
```

**JSON**

```json
[
  {
    "pregnancies": "6",
    "plasma glucose concentration": "148",
    "diastolic blood pressure": "72",
    "triceps skinfold thickness": "35",
    "insulin": "0",
    "body mass index": "33.6",
    "diabetes pedigree function": "0.627",
    "age": "50",
    "diabetic": "1"
  }, {
    "pregnancies": "1",
    "plasma glucose concentration": "85",
    "diastolic blood pressure": "66",
    "triceps skinfold thickness": "29",
    "insulin": "0",
    "body mass index": "26.6",
    "diabetes pedigree function": "0.351",
    "age": "31",
    "diabetic": "0"
  }, {
    "pregnancies": "8",
    "plasma glucose concentration": "183",
    "diastolic blood pressure": "64",
    "triceps skinfold thickness": "0",
    "insulin": "0",
    "body mass index": "23.3",
    "diabetes pedigree function": "0.672",
    "age": "32",
    "diabetic": "1"
  }, {
    "pregnancies": "1",
    "plasma glucose concentration": "89",
    "diastolic blood pressure": "66",
    "triceps skinfold thickness": "23",
    "insulin": "94",
    "body mass index": "28.1",
    "diabetes pedigree function": "0.167",
    "age": "21",
    "diabetic": "0"
  }, {
    "pregnancies": "0",
    "plasma glucose concentration": "137",
    "diastolic blood pressure": "40",
    "triceps skinfold thickness": "35",
    "insulin": "168",
    "body mass index": "43.1",
    "diabetes pedigree function": "2.288",
    "age": "33",
    "diabetic": "1"
  }
]
```