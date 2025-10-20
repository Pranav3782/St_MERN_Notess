class SubArray2  {
    public static void main(String[] args) {
        int[] arr={-2,1,-3,4,-1,2,1,-5,4};
        int n= arr.length;
        int max_sum = Integer.MIN_VALUE;
        int curr_sum = 0;
        for(int i=0;i<n;i++){
          
          curr_sum+=arr[i];
          if(curr_sum>max_sum){
            max_sum= curr_sum;
          }
          if(curr_sum<0){
            curr_sum=0;
          }
        }
        System.out.print(max_sum);
    }
}