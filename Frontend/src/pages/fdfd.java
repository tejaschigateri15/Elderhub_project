import java.util.Scanner;

public class Warshall {
    private int V;
    private boolean[][] tc;

    public void getTC(int[][] graph) {
        V = graph.length;
        tc = new boolean[V][V];

        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (graph[i][j] != 0) {
                    tc[i][j] = true;
                }
            }
        }

        for (int k = 0; k < V; k++) {
            for (int i = 0; i < V; i++) {
                for (int j = 0; j < V; j++) {
                    if (tc[i][k] && tc[k][j]) {
                        tc[i][j] = true;
                    }
                }
            }
        }
    }

    public void displayTC() {
        System.out.println("Transitive Closure:");
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (tc[i][j]) {
                    System.out.print("1 ");
                } else {
                    System.out.print("0 ");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
       
