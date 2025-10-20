
// class Reverse{
//     public static void main(String[] args) {
//         int [] arr={10,20,30,40,50};
//         System.out.println("Content of the array");
//         for(int i=4;i>-1;i--){
//             System.out.println("Value at arr["+i+"] "+arr[i]);
//         }
//     }
// }
import java.util.*;


class Reverse{
    public static void main(String[] args) {
        int [] arr={60,10,20,30,40,50};
        //int len=arr.length;
        Arrays.sort(arr);
        
        //System.out.println(Arrays.toString(arr));
        //System.out.println(len);

        for(int i=5;i>-1;i--){
           //System.out.println("Value at arr["+i+"] "+arr[i]);
           
         }
         System.out.println(Arrays.toString(arr));
    }
}
