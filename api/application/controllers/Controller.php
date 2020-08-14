<?php
class Controller extends CI_Controller {

    public function __construct(){
        parent::__construct();
        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json');
        $this->load->model('Model');
        $this->load->database();
    }

    public function cookie() {
        $a = array(
            'state' => 1,
        );
        $post = json_decode(file_get_contents("php://input"),true);
        setcookie('qq', base64_encode($post['qq']), time()+60*60*24*365, '/');
        $this->Model->end($a);
    }

    public function edit(){
        $a = array(
            'state' => 1,
            'info' => '你的内容已经发布成功了，正带你回到首页。'
        );

        $post = json_decode(file_get_contents("php://input"),true);

        if(!isset($this->Model->user)){
            $a['state'] = 2;
            $a['info'] = '你没有登录！';
            $this->Model->end($a);
        }

        if(!isset($post['article'][0])){
            $a['state'] = 0;
            $a['info'] = '你没有编写任何内容，请添加你需要发布的内容！';
            $this->Model->end($a);
        }

        $this->db->insert('message', array(
            'cid' => $post['category'],
            'anonymous' => $post['anonymous'],
            'author' => $this->Model->user['qq'],
            'article' => json_encode($post['article']),
            'time' => time()
        ));
        $this->Model->end($a);
    }

    public function reply() {
        $a = array(
            'state' => 1,
            'info' => '回复成功！'
        );

        $post = json_decode(file_get_contents("php://input"),true);

        if(!isset($this->Model->user)){
            $a['state'] = 0;
            $a['info'] = '你没有登录！';
            $this->Model->end($a);
        }

        if($post['text'] == NULL){
            $a['state'] = 0;
            $a['info'] = '你没有编写任何内容，请添加你需要发布的内容！';
            $this->Model->end($a);
        }

        $this->db->insert('comment', array(
            'mid' => $post['mid'],
            'parent' => $post['coid'],
            'author' => $this->Model->user['qq'],
            'text' => $post['text'],
            'time' => time()
        ));

        $coid = $this->db->insert_id();

        if($post['coid']!==0){
            $this->db->where('coid',$post['coid']);
            $this->db->select('author');
            $query = $this->db->get('comment');
            $uid = $query->row_array();
        }else{
            $this->db->where('mid',$post['mid']);
            $this->db->select('author');
            $query = $this->db->get('message');
            $uid = $query->row_array();
        }

        $this->db->insert('notice', array(
            'type' => 'reply',
            'mid' => $post['mid'],
            'coid' => $coid,
            'uid' => $uid['author'],
            'time' => time()
        ));

        $this->Model->end($a);
    }

    public function picupload() {
        $this->load->model('AliYunUpload');

        #获取上传文件信息
        $saveFile = $_FILES['file']['tmp_name'];
        #上传文件后缀
        $ext = substr($_FILES['file']['name'], strrpos($_FILES['file']['name'], '.')
            + 1);
        #重命名文件上传名字
        $dst = 'bbqfiles/' . md5(time()) . '.' . $ext;
        #执行阿里云上传
        $aliyun = new AliYunUpload();
        $url = $aliyun->uploadImage($dst, $saveFile);
        #根据显示返回信息
        //图片处理不要可以删除."?x-oss-process=style/图片处理名称"
        $json = json_encode(array(
            'large' =>"https://你oss的域名".$dst."?x-oss-process=style/图片处理名称"
        ));
        echo($json);

    }

    public function notice($readall=false) {
        if(!$readall) {
            $post = json_decode(file_get_contents("php://input"),true);

            
        }
    }
}