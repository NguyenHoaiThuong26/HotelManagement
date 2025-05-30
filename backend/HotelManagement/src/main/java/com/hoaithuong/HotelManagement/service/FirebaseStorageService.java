package com.hoaithuong.HotelManagement.service;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.firebase.cloud.StorageClient;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Service
public class FirebaseStorageService {

    public String uploadImage(MultipartFile file) {
        try {
            String fileName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();

            Bucket bucket = StorageClient.getInstance().bucket();
            Blob blob = bucket.create(fileName, file.getBytes(), file.getContentType());

            String imageUrl = "https://firebasestorage.googleapis.com/v0/b/" +
                    bucket.getName() + "/o/" +
                    java.net.URLEncoder.encode(fileName, "UTF-8") +
                    "?alt=media";

            return imageUrl;
        } catch (Exception e) {
            throw new RuntimeException("Image upload failed: " + e.getMessage());
        }
    }
}
