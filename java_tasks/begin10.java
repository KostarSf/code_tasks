package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите первое ненулевое число: ");
        float a = scanner.nextFloat();

        System.out.print("Введите второе ненулевое число: ");
        float b = scanner.nextFloat();

        float Sum = (a * a) + (b * b);
        float Dif = (a * a) - (b * b);
        float Prd = (a * a) * (b * b);
        float Qnt = (a * a) / (b * b);

        System.out.println("Сумма квадратов: " + Sum);
        System.out.println("Разность квадратов: " + Dif);
        System.out.println("Произведение квадратов: " + Prd);
        System.out.println("Частное квадратов: " + Qnt);
        scanner.close();
    }
}
