public class MyMethod {

    public static double findLargest(double x, double y, double z){
        double largest = 0.0;
  
        if(x > y && x > z){
            largest = x;
        }

        if(y > x && y > z){
            largest = y;
        }

        if(z > x && z > y){
            largest = z;
        } 

        System.out.println(largest);

        return largest;
    } 

}