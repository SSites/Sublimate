var mongoose = require('mongoose');

var dataSchema = mongoose.Schema({
  '_id': mongoose.Schema.Types.ObjectId,
  'user': Number,
  'Household heating => 70F': {
    'Group': Number,
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'Household heating < 70F': {
    'Group': Number,
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'Use of heat pump': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'Use of air conditioner': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'shower - short': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'shower - long (> 3 min)': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'bath': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'wash-up': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'use of dishwater': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'use of clothes washer': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'use of clothes dryer': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'use of cooking range': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'use of oven': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'use of self-clean feature of electric oven': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'Small kitchen appliance in the home': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'TV/computer use': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'air travel - large plane': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'air travel - small plane (<50 seats)': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'car trips- self only': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'car trips - driver and self': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'car trips - 2+ people with multiple end points': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'trips using public transportation': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'bags of garbage disposed': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'bags of recycling deposited (negative CF)': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'bags of compost deposited (negative CF)': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'hazardous of electric items disposed': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  'large items disposed': {
    'Group': Number, 
    'Units': Number,
    'Consumption': Number,
    'Quality_of_Life_Importance__1_10': Number,
    'solar_powered__water_heater': Number,
    'gas_water_heater': Number,
    'electric_water_heater__peak_hou': Number,
    'electric_water_heater__off_peak': Number,
    'gas': Number,
    'natural_gas': Number,
    'hybrid': Number,
    'electric__peak_hours': Number,
    'electric__off_peak_hours': Number,
    'jetfuel': Number
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

var SomeData = mongoose.model('SomeData', dataSchema);

module.exports = SomeData;