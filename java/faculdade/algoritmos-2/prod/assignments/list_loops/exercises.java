import java.util.Scanner;
import java.util.Random;

public class exercises
{
    static Scanner in = new Scanner(System.in);

    public static void main(String[] args)
    {
        charDot();
        vowelsCounter();
        repeatWord();
        loopUntilExit();
        nameValidation();
        passwordConfirm();
        guessGame();
        votingSystem();
        atm();
        questionRepeat();
        cpfValidation();
        quiz();
        repeatLetter();
        dice();
        menu();
        vowelsUntilX();
        productTotal();
        wordCounter();
        strongPassword();
        charFinder();
        loopBreaker();
        sumDigitsString();
    }

    public static void charDot()
    {
        int i = 0;
        String usr;
        System.out.println("type some characters then type '.'");
        do
        {
            usr = in.next();
            if(!usr.equals(".")) i++;
        } while(!usr.equals("."));

        System.out.println("u typed " + i + " characters");
    }

    public static void vowelsCounter()
    {
        System.out.println("type a chain of characters and ill count the vowels");
        String word = in.nextLine().toLowerCase();
        int count = 0;
        char c;

        for(int i = 0; i < word.length(); i++)
        {
            c = word.charAt(i);
            if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u') count++;
        }
        System.out.println("the word has " + count + " vowels");
    }

    public static void repeatWord()
    {
        System.out.println("type a word");
        String word = in.next();
        System.out.println("type how many times to display it");
        int n = in.nextInt();

        for(int i=0;i<n;i++) System.out.println(word);
    }

    public static void loopUntilExit()
    {
        String voider;
        System.out.println("vai digitando ai, quando quiser parar digite 'sair'");
        do
        {
            voider = in.nextLine();
        }
        while(!voider.equals("sair"));
    }

    public static void nameValidation()
    {
        String name;
        do
        {
            System.out.println("insert a name(3 char min): ");
            name = in.next();
        }
        while(name.length()<3);
    }

    public static void passwordConfirm()
    {
        String pass1,pass2;
        do
        {
            System.out.println("invente uma senha: ");
            pass1 = in.next();
            System.out.println("confirme a senha");
            pass2 = in.next();
        }while(!pass1.equals(pass2));
    }

    public static void guessGame()
    {
        int secret = 7;
        int guess;

        System.out.println("try to guess the secret number (u have 5 attempts)");
        for(int i=0;i<5;i++)
        {
            guess = in.nextInt();
            if(guess==secret)
            {
                System.out.println("u did it!");
                break;
            }
        }
    }

    public static void votingSystem()
    {
        int a=0,b=0,c=0;
        String votes;

        System.out.println("insert a letter to vote in someone, the insert " +
            "'fim' to count the votes\na) chile\nb) mauricio\nc) galia");
        do
        {
            votes = in.next().toLowerCase();
            if(votes.equals("a")) a++;
            else if(votes.equals("b")) b++;
            else if(votes.equals("c")) c++;
        }while(!votes.equals("fim"));

        System.out.println("votes counting");
        System.out.println("chile: "+a);
        System.out.println("mauricio: "+b);
        System.out.println("galia:"+c);
    }

    public static void atm()
    {
        int money = 1000;
        int cashOut;

        do
        {
            System.out.println("\nu have $"+money);
            System.out.println("type 0 to exit");
            System.out.println("or\ntype an amount to withdraw");

            cashOut = in.nextInt();

            if(cashOut == 0)
            {
                break;
            }

            if(cashOut < 0)
            {
                System.out.println("no negative bro");
            }
            else if(cashOut > money)
            {
                System.out.println("no money for that");
            }
            else
            {
                money -= cashOut;
            }

        }while(money > 0);

        System.out.println("bank: "+money);
    }

    public static void questionRepeat()
    {
        String answer;
        do
        {
            System.out.println("best soccer team?");
            answer = in.nextLine();
        }while(!answer.equalsIgnoreCase("sao paulo"));
        System.out.println("u goddamn right");
    }

    public static void cpfValidation()
    {
        String cpf;
        do
        {
            System.out.println("type ur cpf(11 digits): ");
            cpf = in.next();
        }while(cpf.length()!=11);
    }

    public static void quiz()
    {
        int score = 0;
        String answer;

        System.out.println("2+2?");
        answer = in.next();
        if(answer.equals("4")) score++;

        System.out.println("best university?");
        answer = in.next();
        if(answer.equalsIgnoreCase("senac")) score++;

        System.out.println("best teacher?");
        answer = in.next();
        if(answer.equalsIgnoreCase("chile")) score++;

        System.out.println("3+3?");
        answer = in.next();
        if(answer.equals("6")) score++;

        System.out.println("1+1?");
        answer = in.next();
        if(answer.equals("2")) score++;

        System.out.println("u scored: "+score);
    }

    public static void repeatLetter()
    {
        System.out.println("type a letter");
        char letter = in.next().charAt(0);
        System.out.println("how many times to display it?");
        int n = in.nextInt();

        for(int i=0;i<n;i++) System.out.print(letter);
    }

    public static void dice()
    {
        System.out.println("type something to roll the dice");
        in.next();
        Random roll = new Random();
        for(int i=0;i<10;i++)
            System.out.println(roll.nextInt(6)+1);
    }

    public static void menu()
    {
        int option;
        do
        {
            System.out.println("options: \n1\n2\n3\n0 - quit");
            option = in.nextInt();
        }while(option!=0);
    }

    public static void vowelsUntilX()
    {
        char c;
        int count=0;

        do
        {
            System.out.println("type random chars n ill count the vowels only\ntype 'x' to exit");
            c = in.next().charAt(0);
            if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u') count++;
        }while(c!='x');

        System.out.println(count);
    }

    public static void productTotal()
    {
        String name;
        double price, total = 0;

        do{
            System.out.println("insert product name (or 'fim' to stop):");
            name = in.next();

            if(!name.equals("fim")){
                System.out.println("insert price:");
                price = in.nextDouble();

                if(price < 0){
                    System.out.println("no negative price bro");
                }
                else{
                    total += price;
                }
            }

        }while(!name.equals("fim"));

        System.out.println("total: " + total);
    }

    public static void wordCounter()
    {
        System.out.println("write a phrase:");
        String phrase = in.nextLine();
        int count = 1;
        for(int i=0;i<phrase.length();i++)
            if(phrase.charAt(i)==' ') count++;

        System.out.println("ur phrase has "+count+" words");
    }

    public static void strongPassword()
    {
        String pass;
        boolean ok;

        do{
            System.out.println("insert password(8char, upper n "+
                "lowercase, number):");

            pass = in.next();
            ok = true;

            if(pass.length() < 8){
                System.out.println("min 8 chars");
                ok = false;
            }

            boolean up=false, num=false;

            for(int i=0;i<pass.length();i++){
                if(Character.isUpperCase(pass.charAt(i))) up=true;
                if(Character.isDigit(pass.charAt(i))) num=true;
            }

            if(!up){
                System.out.println("need uppercase");
                ok = false;
            }

            if(!num){
                System.out.println("need number");
                ok = false;
            }

        }while(!ok);

        System.out.println("password ok");
    }

    public static void charFinder()
    {
        System.out.println("insert word:");
        String w = in.next();

        System.out.println("insert char to count:");
        char c = in.next().charAt(0);

        int count=0;

        for(int i=0;i<w.length();i++)
            if(w.charAt(i)==c) count++;

        System.out.println("found: "+count);
    }

    public static void loopBreaker()
    {
        int n;

        do{
            System.out.println("insert number to break the loop(1-100):");
            n = in.nextInt();

            if(n < 1 || n > 100)
            {
                System.out.println("out of range bro");
            }

        }while(n<1 || n>100);
    }

    public static void sumDigitsString()
    {
        System.out.println("insert string:");
        String s = in.next();

        int sum=0;

        for(int i=0;i<s.length();i++){
            char c = s.charAt(i);
            if(Character.isDigit(c))
                sum += c - '0';
        }

        System.out.println("the sum of the digits in the string is: "+sum);
    }
}
