using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Diagnostics;

namespace bot_control
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        bool permit1 = false;
        int perid = 0;
        private void button3_Click(object sender, EventArgs e)
        {
            //permit
            if (permit1 == false)
            {
                string strCmdText;
                strCmdText = "/K cd C:/Users/Griffen/Documents/More bot stuff/darkgriffen_bot & title PERMIT griffen bot & node permit ";
                Process permitit     =   System.Diagnostics.Process.Start("CMD.exe", strCmdText);
                permit1 = true;
                permitit.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                perid = permitit.Id;
                permit.BackColor = Color.Green;
            }
            else
            {
                Process p = Process.GetProcessById(perid);
                p.Kill();
                permit.BackColor = Color.Red;


               
                permit1 = false;
            }
        }
        bool ban = false;
        int[] banids = { 0, 0 };
        private void ban_killer_Click(object sender, EventArgs e)
        {
            if (ban == false)
            {
                string strCmdText;
                strCmdText = "/K cd C:/Users/Griffen/Documents/More bot stuff/darkgriffen_bot & title addban griffen bot & node addban ";
                Process add = System.Diagnostics.Process.Start("CMD.exe", strCmdText);
                banids[0] = add.Id;
                string strCmdText1;
                strCmdText1 = "/K cd C:/Users/Griffen/Documents/More bot stuff/darkgriffen_bot & title killer griffen bot & node killermod ";
                Process add1 = System.Diagnostics.Process.Start("CMD.exe", strCmdText1);
                banids[1] = add1.Id;
                add.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                add1.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                ban = true;
                ban_killer.BackColor = Color.Green;
            }
            else
            {
                Process p = Process.GetProcessById(banids[0]);
                p.Kill();
                Process p1 = Process.GetProcessById(banids[1]);
                p1.Kill();
                ban_killer.BackColor = Color.Red;


              
                ban = false;
            }
        }
        bool pool1 = false;
        int poolid = 0;
        private void pool_Click(object sender, EventArgs e)
        {
            if (pool1 == false)
            {
                string strCmdText;
                strCmdText = "/K cd C:/Users/Griffen/Documents/More bot stuff/darkgriffen_bot & title pool griffen bot & node pool ";
               Process a = System.Diagnostics.Process.Start("CMD.exe", strCmdText);
                poolid = a.Id;
                pool.Text = a.Id.ToString();
                pool1 = true;
                pool.BackColor = Color.Green;
                a.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
            }
            else
            {
                Process p = Process.GetProcessById(poolid);
                p.Kill();
                pool.BackColor = Color.Red;


                
               
              
            }
        }
        bool cmds = false;
        int[] cmdsid = { 0, 0 };
        private void do_create_cmds_Click(object sender, EventArgs e)
        {
            if (cmds == false)
            {
                string strCmdText;
                strCmdText = "/K cd C:/Users/Griffen/Documents/More bot stuff/darkgriffen_bot/New_Command_bot & title crcmd griffen bot & node createcmd ";
              Process a =  System.Diagnostics.Process.Start("CMD.exe", strCmdText);
                cmdsid[0] = a.Id;
                string strCmdText1;
                strCmdText1 = "/K cd C:/Users/Griffen/Documents/More bot stuff/darkgriffen_bot/New_Command_bot & title docmd griffen bot & node docmds ";
               Process b = System.Diagnostics.Process.Start("CMD.exe", strCmdText1);
                a.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                b.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                cmdsid[1] = b.Id;
                cmds = true;
                do_create_cmds.BackColor = Color.Green;
            }
            else
            {
                Process p = Process.GetProcessById(cmdsid[0]);
                p.Kill();
                Process p1 = Process.GetProcessById(cmdsid[1]);
                p1.Kill();
                do_create_cmds.BackColor = Color.Red;


                
                cmds = false;

            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            permit.BackColor = Color.Red;
            ban_killer.BackColor = Color.Red;
            pool.BackColor = Color.Red;
            do_create_cmds.BackColor = Color.Red;
        }
    }
}
