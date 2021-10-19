package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите число 'a': ");
        float a = scanner.nextFloat();

        System.out.print("Введите число 'b': ");
        float b = scanner.nextFloat();

        float M = (a + b) / 2;

        System.out.println("Среднее арифметическое: " + M);
        scanner.close();
    }
}
