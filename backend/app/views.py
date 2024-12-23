from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from sklearn.ensemble import RandomForestClassifier
import pandas as pd

# Load the data
data = pd.read_csv("E:/glass.csv")

@api_view(['POST'])
def submit_inputs(request):
    # Get input values from the request data
    RI = request.data.get('RI')  # Renamed from input1
    Na = request.data.get('Na')      # Renamed from input2
    Mg = request.data.get('Mg')        # Renamed from input3
    Al = request.data.get('Al')    # Renamed from input4
    Si = request.data.get('Si')
    K = request.data.get('K')
    Ca = request.data.get('Ca')
    Ba = request.data.get('Ba')
    Fe = request.data.get('Fe')
    # Check if any input value is missing
    if None in (RI,	Na	,Mg	,Al	,Si	,K,Ca,Ba,Fe):
        return Response({'error': 'One or more input values are missing'}, status=status.HTTP_400_BAD_REQUEST)

    # Convert input values to float
    try:
        RI = float('RI')  # Renamed from input1
        Na = float('Na')      # Renamed from input2
        Mg = float('Mg')        # Renamed from input3
        Al = float('Al')    # Renamed from input4
        Si = float('Si')
        K =  float('K')
        Ca = float('Ca')
        Ba = float('Ba')
        Fe = float('Fe')
    except ValueError:
        return Response({'error': 'One or more input values are not valid numbers'}, status=status.HTTP_400_BAD_REQUEST)

    # Prepare input features (assuming columns 1, 2, 3, and 7 are relevant)
    x = data.iloc[:,:-1]  # Adjust column indices based on your dataset
    y = data.iloc[:,-1]          # Adjust column index based on your dataset

    # Train a linear regression model
    rg =RandomForestClassifier()
    rg.fit(x, y)

    # Predict the output based on input values
    out = rg.predict([[RI,	Na	,Mg	,Al	,Si	,K,Ca,Ba,Fe ]])

    # Process the output
    output = f'glass_type: {int(out[0])}'  # Format output to 2 decimal places and include label

    return Response({'output': output})
