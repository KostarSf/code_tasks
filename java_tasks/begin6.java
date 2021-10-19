package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите длину ребра 'a' параллелепипеда: ");
        float a = scanner.nextFloat();

        System.out.print("Введите длину ребра 'b' параллелепипеда: ");
        float b = scanner.nextFloat();

        System.out.print("Введите длину ребра 'c' параллелепипеда: ");
        float c = scanner.nextFloat();

        float V = a * b * c;
        float S = 2 * (a * b + b * c + a * c);

        System.out.println("Объём параллелепипеда: " + V);
        System.out.println("Площадь поверхности: " + S);
        scanner.close();
    }
}
