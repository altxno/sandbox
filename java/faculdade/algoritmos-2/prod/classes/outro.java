import java.util.*;
public class outro {

public static void main(String[] args) {
        // sortNsum();
        // sumAll();
        // printers();
        // execs();
        // arraia();
        arraia2();
}

static void arraia(){
    int nums[] = {1, 2, 3};
    int posicao = -1;

    for(int i=0 ; i<nums.length ; i++){
        if(nums[i] == 2){
            posicao = i;
            System.out.printf("tem na posicao %d%n ",posicao);
            break;
        }

    }
    if(posicao == -1){System.out.println("tem n");}
}

static void arraia2(){
    int nums[] = new int[3];

    for(int i=0 ; i<nums.length ; i++){
        if(nums[i] == 0){
            nums[i] = (int)(Math.random() * 101);
        }

    }
    System.out.println(Arrays.toString(nums));
}

















public static void sortNsum(){
        int[] nums = {10, 5, 3, 1, 2};
        String[] noms = {"al", "gui", "gio", "bru", "bia"};

        Arrays.sort(nums);
        Arrays.sort(noms);

        System.out.println (Arrays.toString(noms) + "\n" + Arrays.toString(nums) );
    }

public static void sumAll(){

        int[] nums = {1, 2, 3};
        int soma = 0;
        for(int i= 0 ; i<nums.length ; i++){
            soma+=nums[i];
        }
        System.out.println(soma);

    }

public static void printers(){
    String bloco = "- ";
    int linha = 10;
    int coluna = 10;

    for(int i=0 ; i<linha ; i++){
        System.out.println();
        System.out.print(bloco);
        for(int j=0 ; j<coluna ; j++){
            System.out.print(bloco);
        }
    }
    System.out.println();

}

public static void execs(){

    int[] array = new int[10];
    for(int i=0 ; i<=10 ; i++){
        array[i] = i*2;
    }
    System.out.println(array[0]);
}

}

//Arrays.toString(varAq) && Arrays.sort(varAq);
//
