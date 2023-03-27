function carSpeed(speed){
// If the car's speed is less than 70 (the speed limit), then the speed detector should return an "ok".
    if(speed < 70)
        return("Ok");
// The detector should calculate a demerit point for every 5km/h above the speed limit(70) and print the total.  
    else if(speed > 69)
        return("Points: " + (speed - 70) / 5);
// If the detector shows more than 12 demerit points, (equivalent to a speed of 135 and above), it should return the string "License suspended".
        else if (speed > 134)
        return("License suspended");
}
