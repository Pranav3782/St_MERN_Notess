class SubArray {
    public static void main(String[] args) {
        int[] arr={-2,1,-3,4,-1,2,1,-5,4};
         int n= arr.length;
        int max_sum = Integer.MIN_VALUE;
        for(int i=0;i<n;i++){
            for(int j= i;j<n;j++){
                // System.out.print(i+"->"+j);
                int curr_sum=0;
                for(int idx=i;idx<=j;idx++){
                    // System.out.print(arr[idx]+",");
                    curr_sum+=arr[idx];
                }
                if(curr_sum>max_sum){
                    max_sum = curr_sum;
                }
                
            }
        }
        System.out.print(max_sum);
        
    }
}