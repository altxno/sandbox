// import java.util.Scanner;

// public class listLoops
// {

//     static Scanner in = new Scanner(System.in);

//     public static void main(String[] args)
//     {
//         // charDot();
//         vowelsCounter();
//     }

//     public static void charDot()
//     {
//         System.out.println("---1st - Character counter till---\n");
//         System.out.println("Insert as many characters that ur kb || fingers can!");
//         System.out.println("then press .");

//         int i = 0;
//         String usr;
//         boolean stop = false;

//         do
//         {
//             usr = in.next();
//             i++;
//             if(usr.equals(".")){stop = true; i -= 1;}
//         }
//         while(stop==false);

//         System.out.println("vc digitou "+i+ " caracteres(tirando o '.')");
//     }

//     public static void vowelsCounter()
//     {
//         System.out.println("insert a chain of characters and ill count "+
//             "the vowels only");
//         String word = in.nextLine();
//         int vowelCount = 0;
//         char c;

//         for(int i = 0 ; i < word.length() ; i++)
//         {
//             c = word.charAt(i);
//             for(int j = 0 ; c == 'a' || c == 'e' || c == 'i' || c == 'o'
//                 || c == 'u' ; j++){vowelCount++;}
//         }
//         System.out.println(vowelCount);
//     }


// }
