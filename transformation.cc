#include <iostream>
#include <string>
using namespace std;

int main(){
    string id, name;
    while(cin >> id >> name){
    cout << "<tr>" << endl;
    cout << "    <td>" << name << "</td>" << endl;
    cout << "    <td>" << id << "</td>" << endl;
    cout << "</tr>" << endl;
    }
}