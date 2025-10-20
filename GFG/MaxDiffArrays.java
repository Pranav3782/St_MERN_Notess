class MaxDiffArrays {
    public static void main(String[] args) {
       int val=0;
       int diff=0;
       int[] arr={2,3,10,6,4,8};
       int n=arr.length;
       for(int i=0;i<=n-2;i++){
           for(int j=i+1;j<n;j++){
               if(arr[j]>arr[i]){
                   diff=arr[j]-arr[i];
                   if(diff>val){
                       val=diff;
                   }
               }
           }
       }
       System.out.print(val);
    }
}