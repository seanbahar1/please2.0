namespace bot_control
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.ban_killer = new System.Windows.Forms.Button();
            this.pool = new System.Windows.Forms.Button();
            this.permit = new System.Windows.Forms.Button();
            this.do_create_cmds = new System.Windows.Forms.Button();
            this.button5 = new System.Windows.Forms.Button();
            this.button6 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // ban_killer
            // 
            this.ban_killer.Location = new System.Drawing.Point(12, 12);
            this.ban_killer.Name = "ban_killer";
            this.ban_killer.Size = new System.Drawing.Size(401, 48);
            this.ban_killer.TabIndex = 0;
            this.ban_killer.Text = "ban killer";
            this.ban_killer.UseVisualStyleBackColor = true;
            this.ban_killer.Click += new System.EventHandler(this.ban_killer_Click);
            // 
            // pool
            // 
            this.pool.Location = new System.Drawing.Point(12, 120);
            this.pool.Name = "pool";
            this.pool.Size = new System.Drawing.Size(401, 48);
            this.pool.TabIndex = 1;
            this.pool.Text = "pool";
            this.pool.UseVisualStyleBackColor = true;
            this.pool.Click += new System.EventHandler(this.pool_Click);
            // 
            // permit
            // 
            this.permit.Location = new System.Drawing.Point(12, 66);
            this.permit.Name = "permit";
            this.permit.Size = new System.Drawing.Size(401, 48);
            this.permit.TabIndex = 2;
            this.permit.Text = "permit";
            this.permit.UseVisualStyleBackColor = true;
            this.permit.Click += new System.EventHandler(this.button3_Click);
            // 
            // do_create_cmds
            // 
            this.do_create_cmds.Location = new System.Drawing.Point(12, 174);
            this.do_create_cmds.Name = "do_create_cmds";
            this.do_create_cmds.Size = new System.Drawing.Size(401, 48);
            this.do_create_cmds.TabIndex = 3;
            this.do_create_cmds.Text = "do and create cmds";
            this.do_create_cmds.UseVisualStyleBackColor = true;
            this.do_create_cmds.Click += new System.EventHandler(this.do_create_cmds_Click);
            // 
            // button5
            // 
            this.button5.Location = new System.Drawing.Point(12, 228);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(401, 48);
            this.button5.TabIndex = 4;
            this.button5.Text = "in construction";
            this.button5.UseVisualStyleBackColor = true;
            // 
            // button6
            // 
            this.button6.Location = new System.Drawing.Point(12, 282);
            this.button6.Name = "button6";
            this.button6.Size = new System.Drawing.Size(401, 48);
            this.button6.TabIndex = 5;
            this.button6.Text = "in construction";
            this.button6.UseVisualStyleBackColor = true;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(417, 339);
            this.Controls.Add(this.button6);
            this.Controls.Add(this.button5);
            this.Controls.Add(this.do_create_cmds);
            this.Controls.Add(this.permit);
            this.Controls.Add(this.pool);
            this.Controls.Add(this.ban_killer);
            this.Name = "Form1";
            this.Text = "[beta need to close servers menualy :(] bot features control will be updated";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button ban_killer;
        private System.Windows.Forms.Button pool;
        private System.Windows.Forms.Button permit;
        private System.Windows.Forms.Button do_create_cmds;
        private System.Windows.Forms.Button button5;
        private System.Windows.Forms.Button button6;
    }
}

