class FrequenciesSorted {
    public static void main(String[] args) {
        int count=1;
        int s=0;
        int s1=0;
        int[] arr={1,1,1,2,3,3,5,5,8,8,8,9,9,10};
        int n=arr.length;
        int j=0;
        for(int i=0;i<n;i++){
            if(arr[s]==arr[s1]){
                count++;
            }
            
            
        }
        System.out.println(count);
    }
}