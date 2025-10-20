import java.util.ArrayList;
class ArrayLeaders{
    public static void main(String[] args) {
        
        ArrayList<Integer> al=new ArrayList<>();
        int[] arr={16, 17, 4, 3, 5, 2};
        int n=arr.length;
        int largest = arr[n-1];
        for(int i=n-2;i>=0;i--){
            if(arr[i]>largest){
                al.add(arr[i]);
                largest=arr[i];
            }
        }
        System.out.print(al);
    }
}