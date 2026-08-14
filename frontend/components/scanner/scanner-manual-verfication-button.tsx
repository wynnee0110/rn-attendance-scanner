import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export interface ScannerManualVerificationButtonProps {
    onPress?: () => void;
}

export function ScannerManualVerificationButton({
    onPress,
}: ScannerManualVerificationButtonProps) {
    const [visible, setVisible] = useState(false);
    const [studentName, setStudentName] = useState("");
    const [course, setCourse] = useState("");

    const handleOpen = () => {
        setVisible(true);
        onPress?.();
    };

    const handleClose = () => {
        setVisible(false);
        setStudentName("");
        setCourse("");
    };

    const handleSubmit = () => {
        if (!studentName.trim() || !course.trim()) return;

        console.log("Student Name:", studentName);
        console.log("Course:", course);

        // Call your API here later

        handleClose();
    };

    return (
        <>
            {/* Manual Entry Button */}
            <TouchableOpacity
                onPress={handleOpen}
                activeOpacity={0.8}
                style={{
                    position: "absolute",
                    bottom: 115,
                    alignSelf: "center",
                    zIndex: 10,
                }}
                className="bg-white px-4 py-2.5 rounded-full border border-gray-100 flex-row items-center gap-2 shadow-md"
            >
                <Ionicons
                    name="keypad"
                    size={16}
                    color="#1f2937"
                />

                <Text className="text-gray-800 text-xs font-semibold">
                    Manual Entry
                </Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                visible={visible}
                transparent
                animationType="fade"
                onRequestClose={handleClose}
            >
                <View className="flex-1 bg-black/50 justify-end">
                    <View className="bg-white rounded-t-3xl px-6 pt-6 pb-10">

                        {/* Header */}
                        <View className="flex-row items-center justify-between mb-6">
                            <View>
                                <Text className="text-xl font-bold text-gray-900">
                                    Manual Entry
                                </Text>

                                <Text className="text-sm text-gray-500 mt-1">
                                    Enter the student's information
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={handleClose}
                                className="w-9 h-9 rounded-full bg-gray-100 items-center justify-center"
                            >
                                <Ionicons
                                    name="close"
                                    size={20}
                                    color="#374151"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Student Name */}
                        <Text className="text-sm font-semibold text-gray-700 mb-2">
                            Student Name
                        </Text>

                        <TextInput
                            value={studentName}
                            onChangeText={setStudentName}
                            placeholder="Enter student name"
                            placeholderTextColor="#9ca3af"
                            autoCapitalize="words"
                            autoCorrect={false}
                            className="border border-gray-200 rounded-xl px-4 py-4 text-gray-900 mb-4"
                        />

                        {/* Course */}
                        <Text className="text-sm font-semibold text-gray-700 mb-2">
                            Course
                        </Text>

                        <TextInput
                            value={course}
                            onChangeText={setCourse}
                            placeholder="e.g. BSCpE"
                            placeholderTextColor="#9ca3af"
                            autoCapitalize="characters"
                            autoCorrect={false}
                            className="border border-gray-200 rounded-xl px-4 py-4 text-gray-900"
                        />

                        {/* Submit */}
                        <TouchableOpacity
                            onPress={handleSubmit}
                            activeOpacity={0.8}
                            className="bg-gray-900 rounded-xl py-4 items-center mt-5"
                        >
                            <Text className="text-white font-semibold">
                                Verify Student
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}