<?php
USE OSS\OssClient;
USE OSS\Core\OssException;

require "ossupload/autoload.php";

class AliYunUpload extends CI_Model
{

    /**
     * 上传图片
     * @param $dst
     * @param $getFile
     * @return mixed
     */
    function uploadImage($dst, $getFile)
    {
        #配置OSS基本配置
        $config = array(
            'KeyId' => '你的阿里云osskeyid',
            'KeySecret' => '你的阿里云oss秘钥',
            'Endpoint' => '地域域名',
            'Bucket' => '库',
        );
        $ossClient = new OssClient(
            $config['KeyId'],
            $config['KeySecret'],
            $config['Endpoint']);
        #执行阿里云上传
        $result = $ossClient->uploadFile(
            $config['Bucket'],
            $dst,
            $getFile);
        #返回
        return $result;
    }
}