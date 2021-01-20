# This program loads CSV files into memory (a pandas dataframe) and searches for a specific row.
# Usually the specific row is reported in a BQ import error message.
#
import pandas as pd

rows_number_with_issue= 82840   #cut and paste from BQ error 82840
# Read data from file 'filename.csv'
# (in the same directory that your python process is based)
# Control delimiters, rows, column names with read_csv (see later)
#data = pd.read_csv('c:\\tmp\\marketo-sample-data.csv')
data = pd.read_csv("C:\\Users\\Gord Nuttall\\Downloads\\leads_leads_2021-01-17T17_18_54Z.csv")
print(f"rows with id {data.id[rows_number_with_issue]}")    #change ".id" as required