class MaxDiffArraysPointer {
    public static void main(String[] args) {
       int res=0;
       int diff=0;
       
       int[] arr={2,3,10,6,4,8};
       int max=arr[0];
       int min=arr[0];
       int n=arr.length;
       for(int i=0;i<n;i++){
           if(arr[i]>max){
               max=arr[i];
               diff=max-min;
               if(diff>res){
                   res=diff;
               }
           }
           else if(arr[i]<min){
               min=arr[i];
               max=arr[i];
           }
       }
       System.out.print(res);
    }
}