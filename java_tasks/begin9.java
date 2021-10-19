package java_tasks;

import java.util.Scanner;

class JavaTasks_Begin9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите неотрицательное число 'a': ");
        float a = scanner.nextFloat();

        System.out.print("Введите неотрицательное число 'b': ");
        float b = scanner.nextFloat();

        float G = (float) Math.sqrt(a * b);

        System.out.println("Среднее геометрическое: " + G);
        scanner.close();
    }
}
