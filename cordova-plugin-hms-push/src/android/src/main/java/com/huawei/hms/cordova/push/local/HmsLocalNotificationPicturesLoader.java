/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.push.local;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;

import com.facebook.common.executors.CallerThreadExecutor;
import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.datasource.BaseBitmapDataSubscriber;
import com.facebook.imagepipeline.image.CloseableImage;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;

import com.huawei.hms.cordova.push.basef.handler.Promise;
import com.huawei.hms.cordova.push.constants.LocalNotification;

import java.util.concurrent.atomic.AtomicInteger;

public class HmsLocalNotificationPicturesLoader {
    private final AtomicInteger count = new AtomicInteger(0);

    private Bitmap largeIconImage;

    private Bitmap bigPictureImage;

    private final Callback callback;

    private Promise promise;

    public HmsLocalNotificationPicturesLoader(Callback callback) {
        this.callback = callback;
    }

    public void setCordovaCallBack(Promise promise) {
        this.promise = promise;
        this.checkAllFinished();
    }

    public void setBigPicture(Bitmap bitmap) {
        this.bigPictureImage = bitmap;
        this.checkAllFinished();
    }

    public void setBigPictureUrl(Context context, String url) {
        if (null == url) {
            this.setBigPicture(null);
            return;
        }

        final HmsLocalNotificationPicturesLoader hmsLocalNotificationPicturesLoader = this;

        try {
            Uri uri = Uri.parse(url);
            this.download(context, uri,
                new BitmapDataSubscriber(hmsLocalNotificationPicturesLoader, LocalNotification.Bitmap.BIG_PICTURE));

        } catch (Exception e) {
            this.setBigPicture(null);
        }
    }

    public void setLargeIcon(Bitmap bitmap) {
        this.largeIconImage = bitmap;
        this.checkAllFinished();
    }

    public void setLargeIconUrl(Context context, String url) {
        if (null == url) {
            this.setLargeIcon(null);
            return;
        }

        final HmsLocalNotificationPicturesLoader hmsLocalNotificationPicturesLoader = this;

        try {
            Uri uri = Uri.parse(url);
            this.download(context, uri,
                new BitmapDataSubscriber(hmsLocalNotificationPicturesLoader, LocalNotification.Bitmap.LARGE_ICON));

        } catch (Exception e) {
            this.setLargeIcon(null);
        }
    }

    private void download(Context context, Uri uri, BaseBitmapDataSubscriber subscriber) {
        ImageRequest imageRequest = ImageRequestBuilder.newBuilderWithSource(uri)
            .setRequestPriority(Priority.HIGH)
            .setLowestPermittedRequestLevel(ImageRequest.RequestLevel.FULL_FETCH)
            .build();

        if (!Fresco.hasBeenInitialized()) {
            Fresco.initialize(context);
        }

        DataSource<CloseableReference<CloseableImage>> dataSource = Fresco.getImagePipeline()
            .fetchDecodedImage(imageRequest, context);

        dataSource.subscribe(subscriber, CallerThreadExecutor.getInstance());
    }

    private void checkAllFinished() {
        if (this.count.incrementAndGet() >= 3 && this.callback != null) {
            this.callback.call(this.largeIconImage, this.bigPictureImage, this.promise);
        }

    }

    public interface Callback {
        /**
         * call Method
         *
         * @param largeIconImage : Bitmap
         * @param bigPictureImage : Bitmap
         * @param promise : Promise
         */
        void call(Bitmap largeIconImage, Bitmap bigPictureImage, Promise promise);
    }
}
