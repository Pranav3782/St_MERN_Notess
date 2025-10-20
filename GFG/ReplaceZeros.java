// replace 5 with 0
class ReplaceZeros {
    public static void main(String[] args) {
        String s="0000";
        String replaced="";
        int len=s.length();
        for(int i=0;i<len;i++){
            char c=s.charAt(i);
            if(c=='0'){
                //System.out.println("zeroo");
                replaced=s.replace("0","5");
            }
        }
        System.out.println(replaced);
    }
}