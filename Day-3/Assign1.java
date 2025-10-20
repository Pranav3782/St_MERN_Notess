import java.util.Scanner;

public class Assign1{
    public static void main(String[] args)
    {
        Scanner input=new Scanner(System.in);
        System.out.println("Enter the number: ");
        int a=input.nextInt();
        
        // System.out.println("Enter the byte ");
        // Byte b=input.nextByte();
        // System.out.println("Enter the int ");
        // int i=input.nextInt();
        // System.out.println("Enter the short ");
        // short s=input.nextShort();
        // System.out.println("Enter the long ");
        // long l=input.nextLong();
        // System.out.println("Enter the float ");
        // float f=input.nextFloat();
        // System.out.println("Enter the double ");
        // double d=input.nextDouble();
        //System.out.println(b+""+Byte.toString.MIN_VALUE(b));
        // System.out.println(i);
        // System.out.println("byte range "+Byte.MIN_VALUE+" to "+Byte.MAX_VALUE);
        // System.out.println(s);
        // System.out.println(l);
        // System.out.println(f);
        // System.out.println(d);


        // int var=0;
        // for (int i=1;i<a+1;i++)
        // {
        //     var+=i;   
        // }
        // System.out.println(var);



        // int var=0;
        // for(int i=0;i<a+1;i++)
        // {
        //     if(i%2!=0)
        //     {
        //         var+=i;
        //     }
            
        // }
        // System.out.println(var);


        // int var=0;
        // for(int i=0;i<a+1;i++)
        // {
        //     if(i%2==0)
        //     {
        //         var+=i;
        //     }
            
        // }
        // System.out.println(var);

        int var=0;
        int n=a/2;
        for(int i=1;i<n+1;i++)
        {
            if(i%2!=0)
            {
                var+=i;
            }
            
        }
        int var1=0;


        for (int j=n+1;j<=a;j++)
        {
            if(j%2==0)
            {
                var1+=j;
            }

        }
        System.out.println(var);
        System.out.println(var1);
        System.out.println(var+var1);





    }
}