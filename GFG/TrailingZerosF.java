class TrailingZerosF {
    public static void main(String[] args) {
       int fact=1;
       int n=7;
       int count=0;
       int dec=0;
       int val=0;

    
       for(int i=1;i<=n;i++){
           fact=fact*i;
       }
       String st = Integer.toString(fact);
       int n1=st.length();
 
      for(int j=n1;j>0;j--){
    
           val=fact%10;
           fact=fact/10;
        //   System.out.println(val);
          if(val==0){
              
              count++;

          }
         
      }
      System.out.print(count);
    
    
       
     
    }
}